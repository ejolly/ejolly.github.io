---
layout: unstyled
title: Blog
---

<div class="post-list-search">
    <h2 class="not-prose">A random collection of guides, ideas, analyses, and visualizations </h2>
    {% include search.html %}
</div>

<div class="post-list-wrapper">
{% for post in site.posts %}
    {% include blog-post.html %}
{% endfor %}
</div>

<script src="{{base.url | prepend: site.url }}/assets/search.js"></script>