---
layout: page
title: Blog
---
<ul class="page-posts">
  {% for post in site.posts %}
    <li class="page-post-item">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>