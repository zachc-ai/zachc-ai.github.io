// Search over /search.json: titles, summaries, tags and full text in both
// languages. The index is small, so a plain scan is enough; Chinese works
// as substring matching without word splitting.
(function () {
  var input = document.getElementById('search-q');
  var list = document.querySelector('.search-results');
  var status = document.querySelector('.search-status');
  if (!input || !list || !status) return;
  var root = document.documentElement;
  var script = document.currentScript || document.querySelector('script[data-index]');
  var indexUrl = (script && script.getAttribute('data-index')) || '/search.json';
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var posts = null;
  var timer = null;

  function lang() {
    return root.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function both(en, zh) {
    return '<span class="lang-en">' + en + '</span><span class="lang-zh">' + zh + '</span>';
  }

  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function termsOf(query) {
    return query.toLowerCase().split(/\s+/).filter(Boolean);
  }

  function pattern(terms) {
    return new RegExp('(' + terms.map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|') + ')', 'gi');
  }

  // Escape everything, wrap the matches in <mark>.
  function mark(text, terms) {
    return String(text).split(pattern(terms)).map(function (part, i) {
      return i % 2 ? '<mark>' + esc(part) + '</mark>' : esc(part);
    }).join('');
  }

  function has(text, terms) {
    var lower = String(text).toLowerCase();
    return terms.some(function (t) { return lower.indexOf(t) !== -1; });
  }

  function snippet(text, terms) {
    var lower = text.toLowerCase();
    var at = -1;
    terms.forEach(function (t) {
      var i = lower.indexOf(t);
      if (i !== -1 && (at === -1 || i < at)) at = i;
    });
    if (at === -1) return '';
    var start = Math.max(0, at - 50);
    var end = Math.min(text.length, at + 150);
    // In spaced scripts, don't start or end mid-word.
    var first = text.indexOf(' ', start);
    if (start > 0 && first !== -1 && first < at && first - start < 20) start = first + 1;
    var stop = text.indexOf(' ', end);
    if (end < text.length && stop !== -1 && stop - end < 20) end = stop;
    return (start > 0 ? '…' : '') + mark(text.slice(start, end), terms) + (end < text.length ? '…' : '');
  }

  // Body text in this language, else the summary, else the other language.
  function excerpt(body, summary, other, terms) {
    return snippet(body, terms) || (has(summary, terms) ? mark(summary, terms) : snippet(other, terms)) || esc(summary);
  }

  function occurrences(hay, term) {
    var n = 0;
    var i = hay.indexOf(term);
    while (i !== -1 && n < 10) {
      n++;
      i = hay.indexOf(term, i + term.length);
    }
    return n;
  }

  // Every term must match somewhere; titles count most, then summaries and tags.
  function score(post, terms) {
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      var s = (post.title.indexOf(t) !== -1 ? 10 : 0) +
        (post.summary.indexOf(t) !== -1 ? 5 : 0) +
        (post.tagText.indexOf(t) !== -1 ? 5 : 0) +
        occurrences(post.body, t);
      if (!s) return 0;
      total += s;
    }
    return total;
  }

  function dateOf(iso) {
    var p = iso.split('-');
    var en = months[Number(p[1]) - 1] + ' ' + Number(p[2]) + ', ' + p[0];
    var zh = p[0] + '年' + Number(p[1]) + '月' + Number(p[2]) + '日';
    return '<time datetime="' + iso + '">' + both(en, zh) + '</time>';
  }

  function render() {
    var query = input.value.trim();
    var terms = termsOf(query);
    if (!posts) return;
    if (!terms.length) {
      list.innerHTML = '';
      status.innerHTML = both('Type to search titles, summaries and full text. Press / anywhere to come back here.', '输入关键词，搜索标题、摘要和正文。在任何页面按 / 都能回到这里。');
      return;
    }
    var hits = [];
    posts.forEach(function (post) {
      var s = score(post, terms);
      if (s) hits.push({ post: post, score: s });
    });
    hits.sort(function (a, b) {
      return b.score - a.score || (a.post.raw.dt < b.post.raw.dt ? 1 : -1);
    });
    status.innerHTML = hits.length
      ? both(hits.length + (hits.length === 1 ? ' post' : ' posts'), '找到 ' + hits.length + ' 篇')
      : both('Nothing matched. Try fewer or different words.', '没找到。换个词，或者少输几个词试试。');
    list.innerHTML = hits.map(function (hit) {
      var p = hit.post.raw;
      return '<li class="archive-item">' +
        '<span class="archive-date">' + dateOf(p.dt) + '</span>' +
        '<div class="archive-body">' +
        '<h3 class="archive-title"><a class="archive-link" href="' + esc(p.u) + '">' + both(mark(p.t, terms), mark(p.tz, terms)) + '</a></h3>' +
        '<p class="search-snippet">' + both(excerpt(p.e, p.d, p.z, terms), excerpt(p.z, p.dz, p.e, terms)) + '</p>' +
        '</div></li>';
    }).join('');
  }

  function remember() {
    var query = input.value.trim();
    var url = window.location.pathname + (query ? '?q=' + encodeURIComponent(query) : '');
    if (window.history.replaceState) window.history.replaceState(null, '', url);
  }

  function setPlaceholder() {
    input.placeholder = input.getAttribute('data-placeholder-' + lang()) || input.placeholder;
  }

  input.value = new URLSearchParams(window.location.search).get('q') || '';
  setPlaceholder();
  document.addEventListener('zc:lang', setPlaceholder);
  input.form.addEventListener('submit', function (event) {
    event.preventDefault();
    render();
    remember();
  });
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { render(); remember(); }, 120);
  });
  if (!input.value && window.matchMedia && window.matchMedia('(hover: hover)').matches) input.focus();

  status.innerHTML = both('Loading the index…', '正在加载索引…');
  fetch(indexUrl)
    .then(function (response) { return response.json(); })
    .then(function (index) {
      var names = index.tags || {};
      posts = index.posts.map(function (p) {
        return {
          raw: p,
          title: (p.t + ' ' + p.tz).toLowerCase(),
          summary: (p.d + ' ' + p.dz).toLowerCase(),
          tagText: (p.g || []).map(function (g) { return g + ' ' + (names[g] || ''); }).join(' ').toLowerCase(),
          body: (p.e + ' ' + p.z).toLowerCase()
        };
      });
      render();
    })
    .catch(function () {
      status.innerHTML = both('The search index didn’t load. Try reloading the page.', '搜索索引没加载出来，刷新一下试试。');
    });
})();
