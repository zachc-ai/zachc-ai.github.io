---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.posts %}
    {% unless post.categories contains "digest" %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} · {% include reading-time.html post_content=post.content %}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    </li>
    {% endunless %}
  {% endfor %}
</ul>
