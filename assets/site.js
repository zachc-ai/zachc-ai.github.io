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
      if (window.URLSearchParams && window.history.replaceState) {
        var u = new URL(window.location.href);
        if (u.searchParams.has('lang')) {
          u.searchParams.set('lang', next);
          window.history.replaceState(null, '', u.toString());
        }
      }
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

  // In-page command palette search (Cmd/Ctrl+K, "/", or header search icon).
  var modal = document.getElementById('search-modal');
  var modalInput = document.getElementById('modal-search-q');
  var modalStatus = document.getElementById('modal-search-status');
  var modalResults = document.getElementById('modal-search-results');
  var indexData = null;
  var indexLoading = false;
  var selectedIdx = 0;

  function curLang() {
    return root.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function esc(text) {
    return String(text || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function markText(text, terms) {
    if (!terms.length) return esc(text);
    var rx = new RegExp('(' + terms.map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|') + ')', 'gi');
    return String(text || '').split(rx).map(function (part, i) {
      return i % 2 ? '<mark>' + esc(part) + '</mark>' : esc(part);
    }).join('');
  }

  function snippetFor(text, fallback, terms) {
    var src = String(text || '');
    var lower = src.toLowerCase();
    var at = -1;
    terms.forEach(function (t) {
      var i = lower.indexOf(t);
      if (i !== -1 && (at === -1 || i < at)) at = i;
    });
    if (at === -1) return markText(fallback || '', terms);
    var start = Math.max(0, at - 36);
    var end = Math.min(src.length, at + 110);
    return (start > 0 ? '…' : '') + markText(src.slice(start, end), terms) + (end < src.length ? '…' : '');
  }

  function syncModalPlaceholder() {
    if (!modalInput) return;
    modalInput.placeholder = modalInput.getAttribute('data-placeholder-' + curLang()) || modalInput.placeholder;
  }

  function highlightSelected() {
    if (!modalResults) return;
    var items = modalResults.querySelectorAll('.search-modal-item');
    [].forEach.call(items, function (li, idx) {
      li.classList.toggle('is-selected', idx === selectedIdx);
      if (idx === selectedIdx) li.scrollIntoView({ block: 'nearest' });
    });
  }

  function renderModal() {
    if (!modalResults || !modalStatus || !modalInput) return;
    var zh = curLang() === 'zh';
    if (!indexData) {
      modalStatus.textContent = zh ? '正在加载索引…' : 'Loading index…';
      return;
    }
    var terms = modalInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var hits = [];
    if (!terms.length) {
      hits = indexData.slice(0, 6);
      modalStatus.textContent = zh ? '最近文章（输入关键词搜标题与全文）' : 'Recent posts (type to search titles and full text)';
    } else {
      indexData.forEach(function (p) {
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i];
          var s = (p._title.indexOf(t) !== -1 ? 10 : 0) +
            (p._summary.indexOf(t) !== -1 ? 5 : 0) +
            (p._tags.indexOf(t) !== -1 ? 5 : 0) +
            (p._body.indexOf(t) !== -1 ? 2 : 0);
          if (!s) return;
          score += s;
        }
        hits.push({ p: p, s: score });
      });
      hits.sort(function (a, b) { return b.s - a.s || (a.p.dt < b.p.dt ? 1 : -1); });
      hits = hits.slice(0, 10).map(function (h) { return h.p; });
      modalStatus.textContent = hits.length
        ? (zh ? '找到 ' + hits.length + ' 篇' : hits.length + (hits.length === 1 ? ' match' : ' matches'))
        : (zh ? '没有匹配结果，换个词试试。' : 'No matches. Try another keyword.');
    }
    selectedIdx = 0;
    modalResults.innerHTML = hits.map(function (p, idx) {
      var title = zh ? (p.tz || p.t) : p.t;
      var bodyText = zh ? (p.z || p.e) : (p.e || p.z);
      var desc = zh ? (p.dz || p.d) : (p.d || p.dz);
      return '<li class="search-modal-item' + (idx === 0 ? ' is-selected' : '') + '">' +
        '<a href="' + esc(p.u) + '">' +
        '<span class="search-modal-item-title"><span>' + markText(title, terms) + '</span><span class="search-modal-item-date">' + esc(p.dt) + '</span></span>' +
        '<p class="search-modal-item-snippet">' + snippetFor(bodyText, desc, terms) + '</p>' +
        '</a></li>';
    }).join('');
  }

  function loadIndex() {
    if (indexData || indexLoading) return;
    indexLoading = true;
    fetch(body.getAttribute('data-index-url') || '/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var names = data.tags || {};
        indexData = (data.posts || []).map(function (p) {
          p._title = ((p.t || '') + ' ' + (p.tz || '')).toLowerCase();
          p._summary = ((p.d || '') + ' ' + (p.dz || '')).toLowerCase();
          p._tags = (p.g || []).map(function (g) { return g + ' ' + (names[g] || ''); }).join(' ').toLowerCase();
          p._body = ((p.e || '') + ' ' + (p.z || '')).toLowerCase();
          return p;
        });
        renderModal();
      })
      .catch(function () {
        if (modalStatus) modalStatus.textContent = curLang() === 'zh' ? '索引加载失败。' : 'Could not load search index.';
      });
  }

  function openModal() {
    if (!modal || !modalInput) return;
    syncModalPlaceholder();
    modal.hidden = false;
    loadIndex();
    renderModal();
    modalInput.focus();
    modalInput.select();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
  }

  var searchLink = document.querySelector('.search-link');
  if (searchLink && modal && !document.getElementById('search-q')) {
    searchLink.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      openModal();
    });
  }

  if (modal && modalInput) {
    [].forEach.call(modal.querySelectorAll('[data-modal-close]'), function (el) {
      el.addEventListener('click', closeModal);
    });
    modalInput.addEventListener('input', renderModal);
    modalInput.addEventListener('keydown', function (event) {
      var items = modalResults ? modalResults.querySelectorAll('.search-modal-item') : [];
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowDown' && items.length) {
        event.preventDefault();
        selectedIdx = (selectedIdx + 1) % items.length;
        highlightSelected();
      } else if (event.key === 'ArrowUp' && items.length) {
        event.preventDefault();
        selectedIdx = (selectedIdx - 1 + items.length) % items.length;
        highlightSelected();
      } else if (event.key === 'Enter' && items[selectedIdx]) {
        event.preventDefault();
        var link = items[selectedIdx].querySelector('a');
        if (link) window.location.href = link.href;
      }
    });
    document.addEventListener('zc:lang', function () {
      syncModalPlaceholder();
      if (!modal.hidden) renderModal();
    });
  }

  // Cmd/Ctrl+K or "/" opens search from anywhere, unless the reader is typing.
  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      var box = document.getElementById('search-q');
      if (box) box.focus();
      else if (modal && !modal.hidden) closeModal();
      else openModal();
      return;
    }
    if (event.key === 'Escape' && modal && !modal.hidden) {
      closeModal();
      return;
    }
    if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
    var el = document.activeElement;
    if (el && (el.isContentEditable || /^(input|textarea|select)$/i.test(el.tagName))) return;
    var searchPageBox = document.getElementById('search-q');
    event.preventDefault();
    if (searchPageBox) searchPageBox.focus();
    else if (modal) openModal();
    else window.location.href = body.getAttribute('data-search-url') || '/search/';
  });
})();
