// Language and theme switches, plus keeping the comment widget in sync.
(function () {
  var root = document.documentElement;
  var body = document.body;
  var originalTitle = document.title;

  function save(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) {}
  }

  function saved(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function tellGiscus(config) {
    var frame = document.querySelector('iframe.giscus-frame');
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ giscus: { setConfig: config } }, 'https://giscus.app');
    }
  }

  function applyTitle(lang) {
    var zh = body.getAttribute('data-title-zh');
    var site = body.getAttribute('data-site-title');
    document.title = lang === 'zh' && zh ? zh + ' | ' + site : originalTitle;
  }

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    applyTitle(lang);
    tellGiscus({ lang: lang === 'zh' ? 'zh-CN' : 'en' });
    // The table of contents and search results rebuild for the new language.
    document.dispatchEvent(new CustomEvent('zc:lang', { detail: lang }));
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    tellGiscus({ theme: theme === 'dark' ? 'transparent_dark' : 'light' });
  }

  applyTitle(root.getAttribute('data-lang'));

  var langButton = document.querySelector('.lang-switch');
  if (langButton) {
    langButton.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      setLang(next);
      save('lang', next);
    });
  }

  var themeButton = document.querySelector('.theme-switch');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
      save('theme', next);
    });
  }

  // Follow the system setting until the reader picks a theme.
  if (window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var follow = function (event) {
      if (!saved('theme')) setTheme(event.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', follow);
    else if (media.addListener) media.addListener(follow);
  }

  // "/" jumps to search from anywhere, unless the reader is typing.
  document.addEventListener('keydown', function (event) {
    if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
    var el = document.activeElement;
    if (el && (el.isContentEditable || /^(input|textarea|select)$/i.test(el.tagName))) return;
    var box = document.getElementById('search-q');
    event.preventDefault();
    if (box) box.focus();
    else window.location.href = body.getAttribute('data-search-url') || '/search/';
  });
})();
