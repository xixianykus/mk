---
title: "Netlify Configuration File"
linktitle: "Netlify Config File"
date: 2023-11-06T07:26:37Z
draft: false
summary: "Info on setting up the netlify.toml config file."
tags: [Netlify]
---

The `netlify.toml` file is powerful way to configure a site hosted on Netlify and is usually stored in the root of your site repo. However information on this is rather scattered.

Here are some source of info.


## By Netlify

Obvious place to start is on Netlify itself and their docs.

[File based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)

> The `[build]` command runs in the Bash shell, allowing you to add Bash-⁠compatible syntax to the command. 

## In Hugo docs

[netlify.toml](https://gohugo.io/hugo-pipes/transpile-sass-to-css/#netlify) for implementing dart sass

```toml
[build.environment]
HUGO_VERSION = "0.115.1"
DART_SASS_VERSION = "1.63.6"
TZ = "America/Los_Angeles"

[build]
publish = "public"
command = """\
  curl -LJO https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz && \
  tar -xf dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz && \
  rm dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz && \
  export PATH=/opt/build/repo/dart-sass:$PATH && \
  hugo --gc --minify \
  """
```

Note the apparent use of calling the variable `DART_SASS_VERSION`. Using such variables in TOML is not allowed. However this works because the `command` value is a bash script and bash can use variables like this.

## Learn TOML

The site [toml.io](https://toml.io/) is a great place to get started with learning TOML.