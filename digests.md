---
layout: page
title: Digests
permalink: /digests/
---

Reading digests — summaries and takeaways from articles, papers, and books.

<ul class="post-list">
  {% assign digests = site.posts | where_exp: "post", "post.categories contains 'digest'" %}
  {% for post in digests %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} · {% include reading-time.html post_content=post.content %}{% if post.source %} · <a href="{{ post.source }}">source</a>{% endif %}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>{% endif %}
    </li>
  {% endfor %}
  {% if digests.size == 0 %}
    <li><em>No digests yet. Stay tuned.</em></li>
  {% endif %}
</ul>
