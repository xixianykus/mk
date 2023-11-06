---
title: "Zero"
date: 2023-11-06T11:18:12Z
draft: false
summary: "Changes made to the site"
css:
- "img {max-width: 350px}"
---

![Test Site Zero logo](/images/testsite0.svg)

This site was an old site to show the CMS for a friend that was never used.

It has now been renamed Test Site Zero and had a whole bunch of work done on it on the 5th and 6th November 2023 including:

- new logo
- new dark mode colour scheme and new custom properties for colours
- CMS from Netlify v.2 to Decap v.3
- removed custom CSS from CMS
- added logo to CMS
- Getting rid of old, worthless pages
- Adding a posted in *section* to the header of each page
- choosing a new style for syntax highlighting: `hrdark`
- various template changes inc.:
  - New tags page template - terms.html
  -  `layouts/index.html` to `layouts/_default.html/home.html`
  - created a css.html partial for CSS in the head inc. the ability to add page specific CSS from the frontmatter
  -  moving the footer partial to `baseof.html`
- new favicon
- added `linktitle` option for the list pages
- new blog posts like this one, [netlify config file](/blog/netlify-config-file/).
- tweaked the font styles and weights and added a google-fonts partial to the head section
- added caching to some partials using the `{{ partialCached }}` method.
- added a [test section](/test/) for trying out things.
- changed the url to [testsitezero.netlify.app](https://testsitezero.netlify.app)
- list of some of my sites in the data section pulled into own page.


{{< page-count >}}