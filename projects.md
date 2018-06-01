---
layout: page
title: Projetos
---
<section class="cards">
  {% for project in site.projects %}
    <a href="{{project.href}}" class="card" target="_blank">
      <p class="card-title">{{ project.title }}</p>
      <p class="card-description">{{ project.description }}</p>
      <div class="card-plus"></div>
    </a>
  {% endfor %}
</section>
