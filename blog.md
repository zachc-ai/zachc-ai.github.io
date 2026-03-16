---
layout: home
title: Blog
permalink: /blog/
list_title: All Posts
---

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'life' or post.categories contains 'tech'" | where_exp: "post", "post.categories contains 'digest' == false" %}
