// Long-post helpers: a "#" on each section heading that copies a link to that
// section, and a table of contents that follows the language switch.
(function () {
  var body = document.querySelector('.post-body');
  if (!body) return;
  var root = document.documentElement;
  var article = body.closest('.post');
  var toc = article && article.querySelector('.post-toc');
  var box = toc && toc.querySelector('.post-toc-box');
  var list = toc && toc.querySelector('.post-toc-list');
  var wide = window.matchMedia ? window.matchMedia('(min-width: 78rem)') : null;
  var links = [];

  function lang() {
    return root.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function block() {
    return body.querySelector('.lang-' + lang()) || body;
  }

  function textOf(heading) {
    var copy = heading.cloneNode(true);
    var anchor = copy.querySelector('.heading-anchor');
    if (anchor) anchor.remove();
    return copy.textContent.trim();
  }

  // Section links.
  [].forEach.call(body.querySelectorAll('h2[id], h3[id]'), function (heading) {
    var anchor = document.createElement('a');
    anchor.className = 'heading-anchor';
    anchor.href = '#' + heading.id;
    anchor.setAttribute('aria-label', 'Copy link to this section / 复制本节链接');
    anchor.textContent = '#';
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      var url = window.location.href.split('#')[0] + '#' + heading.id;
      if (window.history.replaceState) window.history.replaceState(null, '', '#' + heading.id);
      heading.scrollIntoView({ block: 'start' });
      if (!navigator.clipboard || !window.isSecureContext) return;
      navigator.clipboard.writeText(url).then(function () {
        anchor.setAttribute('data-copied', lang() === 'zh' ? '已复制链接' : 'Link copied');
        anchor.classList.add('is-copied');
        setTimeout(function () { anchor.classList.remove('is-copied'); }, 1400);
      }, function () {});
    });
    heading.appendChild(anchor);
  });

  if (!toc || !list || (article && article.getAttribute('data-toc') === 'false')) return;

  // Only long posts with real sections get a contents list. With few h2s,
  // the h3s underneath are listed too.
  function build() {
    var scope = block();
    var h2s = scope.querySelectorAll('h2[id]');
    var longEnough = scope.textContent.length >= (lang() === 'zh' ? 1600 : 4000);
    list.innerHTML = '';
    links = [];
    if (h2s.length < 3 || !longEnough) {
      toc.hidden = true;
      return;
    }
    var withH3 = h2s.length < 4;
    var nested = null;
    [].forEach.call(scope.querySelectorAll(withH3 ? 'h2[id], h3[id]' : 'h2[id]'), function (heading) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = textOf(heading);
      li.appendChild(a);
      if (heading.tagName === 'H3' && nested) {
        nested.appendChild(li);
      } else {
        list.appendChild(li);
        if (withH3) {
          nested = document.createElement('ol');
          li.appendChild(nested);
        }
      }
      links.push({ a: a, heading: heading });
    });
    [].forEach.call(list.querySelectorAll('ol'), function (ol) {
      if (!ol.children.length) ol.remove();
    });
    toc.hidden = false;
    syncOpen();
    spy();
  }

  // Always open as a side rail; folded by default inline.
  function syncOpen() {
    if (box && wide) box.open = wide.matches;
  }

  var ticking = false;
  function spy() {
    ticking = false;
    var current = null;
    for (var i = 0; i < links.length; i++) {
      if (links[i].heading.getBoundingClientRect().top <= 120) current = links[i];
      else break;
    }
    links.forEach(function (link) {
      var on = link === current;
      link.a.classList.toggle('is-current', on);
      if (on) link.a.setAttribute('aria-current', 'true');
      else link.a.removeAttribute('aria-current');
    });
    // The rail fades out once the article is behind the reader.
    toc.classList.toggle('is-past', body.getBoundingClientRect().bottom < 160);
  }

  box.querySelector('summary').addEventListener('click', function (event) {
    if (wide && wide.matches) event.preventDefault();
  });
  list.addEventListener('click', function (event) {
    if (event.target.closest('a') && !(wide && wide.matches)) box.open = false;
  });
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(spy);
    }
  }, { passive: true });
  if (wide) {
    if (wide.addEventListener) wide.addEventListener('change', syncOpen);
    else if (wide.addListener) wide.addListener(syncOpen);
  }
  document.addEventListener('zc:lang', build);
  build();
})();
