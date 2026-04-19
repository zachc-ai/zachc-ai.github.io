---
layout: page
title: Tags
title_zh: 标签
permalink: /tags/
---

{% assign tags = site.tags | sort %}
<div class="tag-cloud">
{% for tag in tags %}
  <a href="#{{ tag[0] | slugify }}" class="tag-link">{{ tag[0] }} ({{ tag[1].size }})</a>
{% endfor %}
</div>

{% for tag in tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul class="post-list">
  {% for post in tag[1] %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">
        <span class="lang-en">{{ post.title | escape }}</span>
        <span class="lang-zh">{{ post.title_zh | default: post.title | escape }}</span>
      </a>
    </h3>
  </li>
  {% endfor %}
</ul>
{% endfor %}
