---
title: Blog
layout: unstyled
---

<div class="post-list-search">
    <h2>A random collection of guides, ideas, analyses, and visualizations </h2>
    {% include search.html %}
</div>

<div class="post-list-wrapper">
{% for post in site.posts %}
    {% include blog-post.html %}
{% endfor %}
</div>
