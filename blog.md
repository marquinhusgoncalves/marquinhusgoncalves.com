---
layout: page
title: Blog
---

<section class="cards">
  {% for post in site.posts %}
    <a href="{{ post.url }}" class="card">
      <article>
        <header>
          <h1 class="card-title">{{ post.title }}</h1>
        </header>
      </article>
      <div class="card-plus"></div>
    </a>
  {% endfor %}
</section>