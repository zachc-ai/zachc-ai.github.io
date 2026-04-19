---
layout: page
title: Digests
title_zh: 摘要
permalink: /digests/
---

<div class="lang-en" markdown="1">
Reading digests — summaries and takeaways from articles, papers, and books.
</div>

<div class="lang-zh" markdown="1">
阅读摘要——来自文章、论文和书籍的要点整理。
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
