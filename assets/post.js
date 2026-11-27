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
  var wide = window.matchMedia ? window.matchMedia('(min-width: 72rem)') : null;
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

  // Copy link with the active ?lang= parameter for bilingual sharing.
  var shareBtn = article && article.querySelector('[data-share-link]');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var u = new URL(window.location.href);
      u.searchParams.set('lang', lang());
      u.hash = '';
      if (!navigator.clipboard || !window.isSecureContext) return;
      navigator.clipboard.writeText(u.toString()).then(function () {
        var enSpan = shareBtn.querySelector('.lang-en');
        var zhSpan = shareBtn.querySelector('.lang-zh');
        if (enSpan) enSpan.textContent = 'Link copied';
        if (zhSpan) zhSpan.textContent = '已复制链接';
        shareBtn.classList.add('is-copied');
        setTimeout(function () {
          if (enSpan) enSpan.textContent = 'Copy link';
          if (zhSpan) zhSpan.textContent = '复制链接';
          shareBtn.classList.remove('is-copied');
        }, 1500);
      }, function () {});
    });
  }

  // Copy button on fenced code blocks.
  [].forEach.call(body.querySelectorAll('pre'), function (pre) {
    var host = pre.closest('.highlighter-rouge') || pre;
    if (host.parentNode && host.parentNode.classList.contains('code-block-wrap')) return;
    var wrap = document.createElement('div');
    wrap.className = 'code-block-wrap';
    host.parentNode.insertBefore(wrap, host);
    wrap.appendChild(host);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.innerHTML = '<span class="lang-en">Copy</span><span class="lang-zh">复制</span>';
    btn.addEventListener('click', function () {
      var text = pre.textContent || '';
      if (!navigator.clipboard || !window.isSecureContext) return;
      navigator.clipboard.writeText(text).then(function () {
        btn.innerHTML = '<span class="lang-en">Copied</span><span class="lang-zh">已复制</span>';
        btn.classList.add('is-copied');
        setTimeout(function () {
          btn.innerHTML = '<span class="lang-en">Copy</span><span class="lang-zh">复制</span>';
          btn.classList.remove('is-copied');
        }, 1400);
      }, function () {});
    });
    wrap.appendChild(btn);
  });

  // Thin reading progress bar along the top edge.
  var progressBar = document.querySelector('.reading-progress');
  var progressTicking = false;
  function updateProgress() {
    progressTicking = false;
    if (!progressBar) return;
    var rect = body.getBoundingClientRect();
    var total = body.offsetHeight - window.innerHeight;
    if (total <= 120) {
      progressBar.classList.remove('is-active');
      return;
    }
    var ratio = Math.min(1, Math.max(0, -rect.top / total));
    progressBar.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
    progressBar.classList.toggle('is-active', rect.top < 0 && ratio < 1);
  }
  if (progressBar) {
    window.addEventListener('scroll', function () {
      if (!progressTicking) {
        progressTicking = true;
        window.requestAnimationFrame(updateProgress);
      }
    }, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    document.addEventListener('zc:lang', updateProgress);
    updateProgress();
  }

  // Narration: one player at a time, and switching language stops it.
  var players = [].slice.call(document.querySelectorAll('.post-listen audio'));
  players.forEach(function (player) {
    player.addEventListener('play', function () {
      players.forEach(function (other) { if (other !== player) other.pause(); });
    });
  });
  document.addEventListener('zc:lang', function () {
    players.forEach(function (player) { player.pause(); });
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
