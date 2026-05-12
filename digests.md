---
layout: page
title: Digests
title_zh: 摘要
permalink: /digests/
---

<div class="lang-en" markdown="1">
What I've been reading, distilled — the parts worth keeping from articles, papers, and books.
</div>

<div class="lang-zh" markdown="1">
最近读的东西，把值得留下的部分摘出来——文章、论文、书。
</div>

<ul class="post-list">
  {% assign digests = site.posts | where_exp: "post", "post.categories contains 'digest'" %}
  {% for post in digests %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} · {% include reading-time.html post_content=post.content %}{% if post.source %} · <a href="{{ post.source }}"><span class="lang-en">source</span><span class="lang-zh">原文</span></a>{% endif %}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          <span class="lang-en">{{ post.title | escape }}</span>
          <span class="lang-zh">{{ post.title_zh | default: post.title | escape }}</span>
        </a>
      </h3>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>{% endif %}
    </li>
  {% endfor %}
  {% if digests.size == 0 %}
    <li>
      <em class="lang-en">No digests yet. Stay tuned.</em>
      <em class="lang-zh">暂无摘要，敬请期待。</em>
    </li>
  {% endif %}
</ul>
