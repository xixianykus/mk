---
title: "Responsiveness"
date: 2021-08-19T18:09:55+01:00
draft: true
summary: "A story of a weird responsiveness response"
---

So I was making the site more responsive. When I used media queries to make the sidebar stack on top at certain widths it worked using `max-width` inside a media query.

BUT it stopped working when I turned on the touch screen button in Firefox. Was this an error?

Well if I changed the `max-width` to `max-device-width` it worked fine. Generally though this is advised against as it's better if web sites are *device-agnositic*.

So what was the issue? It turned out that for some reason I was missing the vital `<meta>` tag in the head of my HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


```css
@media screen and (max-width: 650px) {
    aside,
    main {
        grid-column: 1 / -1;
    }
    footer>div:last-of-type {
        display: none;
    }
}
```

