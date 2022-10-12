# Personal Website Code

Code for my personal website hosted using [Github Pages](https://pages.github.com/), built using [Jekyll](https://jekyllrb.com/), styled using the [Indigo](https://github.com/sergiokopplin/indigo) theme, with CV generation handled using a [markdown-cv template](https://elipapa.github.io/markdown-cv/).

Open sourced under the [MIT license](https://github.com/ejolly/ejolly.github.io/blob/master/LICENSE.md).

## Development

`bundle install`: install all ruby packages  
`npm run dev`: start local server
`npm run build`: build site to `_site/`

## Cheatsheet

- Create new pages but putting `.html` or `.md` files inside the root of this repo (e.g. `about.md`)
- `_includes` = reusable HTML snippets used within `.md` files or by `.html` files in `_layouts`
- `_layouts` = folder of HTML templates dictating how `.md` files should be processed using the `layout: name` frontmatter
- `assets/css/tailwind.css` = main file with all style classes

## Development

### Legend

```mermaid
graph TD;
    default((_layouts/*))
    include>_includes/*]
    special{special}
    page[page]
```

### How the post list renders

```mermaid
graph TD;
    default((default.html))-->blog[blog.md]
    blog-- loop over -->posts{_posts}
     blogpost>blog-post.html]-->posts
```

### How publications work

```mermaid
graph TD;
    page((page.html))-->publications[publications.md]
    pubs[ pubs.md ]-->publications
    pubs-->cv[cv.md]
    cvlayout((cv.html))-->cv
```

### Layout dependencies

```mermaid
graph TD;
    compress{ compress.html }-->default(( default.html));
    default-->unstyled((unstyled.html));
    default-->home((home.html));
    default-->page((page.html));
    page-->post((post.html));
    compress-->cv((cv.html));
    page-->posttoc((post-toc.html));

    header>header.html]-.->unstyled;
    header-.->page
    sociallinks>social-links.html]-.->home
    nav>nav.html]-.->home
    favicon>favicon.html]-.->cv
    favicon-.->default
    footer>footer.html]-.->default
    statcounter>statcounter.html]-.->default
    mathjax>mathjax.html]-.->default
    google>analytics-google.html]-.->default

    seo{ seo }-.->cv
    seo-.->default


```
