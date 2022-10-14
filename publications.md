---
title: Publications
layout: page
---

<div class="paper-list-search">
    <p><em>I try to make all my published work and materials openly accessible. If any of the links below don't work feel free to <a href="mailto:eshin.jolly@gmail.com">email me!</a></em>
    </p>
    {% include search.html %}
</div>

<div class="content">

    {% capture my_include %}
        {% include_relative pubs.md %}
    {% endcapture %}

    {{ my_include | markdownify }}

</div>

<script src="{{base.url | prepend: site.url }}/assets/search.js"></script>