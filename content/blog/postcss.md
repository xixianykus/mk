---
title: "PostCSS"
date: 2021-05-02T06:38:00+01:00
draft: true
summary: "First experience with Post CSS using postcss-cssnext"
---

## Update

After the site stopped working I changed the `<link>` in the  `<head>` section to use `$css` rather than the complied PostCSS `$style`. 

## Important

This did not work because the final link was wrong. It needs `$style.Permalink` rather than piping to a `relURL`.

Full head code:

```go-html-template
{{ $css := resources.Get "css/main.css" }}
{{ $style := $css | resources.PostCSS }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

## First try with Post CSS

The first try at using PostCSS and the plugin *postcss-cssnext* is kinda working and kinda not working. It works and runs and the first time I even got an error message telling me a valid line of CSS was causing an issue:

```css
h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1rem;
}
```

I commented it out and the site started up. However on looking at the CSS file nothing appears to be changed. All the custom properties are there and used exactly as before.

## Slow and Weird

It certainly seems to slow build times down considerably. That could be *CSS Next*. Build times are over 2 seconds which by Hugo standards is :shit: however only when the CSS is modified. If the CSS isn't touched then build times are back up to speed.

Weird behaviour: If you run the site off of Hugo Server and look at the source code the link to the css file is the original one in `static/css/main.css`. However if you build the site (into the the default public folder) you can see that the css file used is that specified and that PostCSS-CSSnext has done it's work and replace the the CSS custom properties with fixed values.


## config file

The config file has

```js
module.exports = {
    map: { inline: true }, // enables source map
    plugins: {
      'postcss-cssnext': {} // requires npm i precss
    }
  };
  ```

  ## Conclusion

  Using CSS-Next slows things down a lot - though only when editing the CSS file. I'm not even sure how useful it is. Looks like I installed everything but Post CSS locally with a load of files in `node_modules`.

  I couldn't get *precss* to work.

  I think I prefer the built in SASS build much more. It's fast, doesn't require any additional files, and easier to set up. Even plain old static CSS is pretty good for most things these days with things like custom properties and the `:is` selector.

  Perhaps it could be used towards the end of a project's development?

  **I need to get precss working and play with that more.**


## Links

1. [12 PostCSS plugins](https://codegeekz.com/12-postcss-plugins-for-developers/)
2. [CSS Next](https://cssnext.github.io/setup/)
3. [Precss](https://github.com/csstools/precss)
