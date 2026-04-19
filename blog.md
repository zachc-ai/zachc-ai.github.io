---
layout: page
title: Blog
title_zh: 博客
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.posts %}
    {% unless post.categories contains "digest" %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} · {% include reading-time.html post_content=post.content %}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          <span class="lang-en">{{ post.title | escape }}</span>
          <span class="lang-zh">{{ post.title_zh | default: post.title | escape }}</span>
        </a>
      </h3>
    </li>
    {% endunless %}
  {% endfor %}
</ul>
