---
title: "Hugo Page Kinds"
date: 2023-11-06T14:37:24Z
draft: false
summary: "A brief look at Hugo's page kinds"
tags: [hugo]
---

There are several *kinds* of template files for pages.

These are:

1. **home page** - typically using `layouts/index.html` or `layout/_default/home.html`
2. **page page** - typically using a template like `layouts/_default/single.html`
3. **list page** - typically using `layouts/_default/list.html`
4. **taxonomy page** - for things like the list of tags or categories will use the list page layout unless another is defined. On this site uses `layouts/_default/taxonomy.html`. You can create [taxonmy specific pages](https://gohugo.io/templates/lookup-order/#taxonomy-pages) too, so a template just for tags and another just for categories. 
5. **term pages** - list out the pages of say a single tag or any other taxonomy. again will default to the above taxonomy page if defined or the list page if not. For their own template use `layouts/_default/terms.html`

There are many naming options for each of these and if you use more than one Hugo will choose the template file which is highest in [the lookup order](https://gohugo.io/templates/lookup-order/).

This means you can create several templates for the home page if you want to experiment with different layouts for example.