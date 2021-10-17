---
title: "CMS Config File"
date: 2021-10-17T19:41:30+01:00
draft: false
summary: "The CMS config file"
---

Here is what the configuration file for the Netlify CMS looks like. Hover to expand.

```yaml
backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)
# local_backend: true # used to allow edits of local repo
display_url: https://mariannakeen.netlify.app  # displays the url in the CMS interface
site_url: https://mariannakeen.netlify.app # used by the CMS for various things
publish_mode: editorial_workflow # hopefully will allow the use of draft edits
logo_url: https://mariannakeen.netlify.app/images/artboard-1.png
media_folder: "static/images"
media_library:
  name: cloudinary
  config:
    cloud_name: xxxxxxxxxx
    api_key: xxxxxxxxxxx
public_folder: "/images"  # this where images are found in the published site. img src= use this path.
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    create: true
#    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    slug: '{{slug}}'
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Summary', name: 'summary', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
  - name: 'pages'
    label: 'Pages'
    folder: 'content'
    create: true
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string'}
      - { label: 'Body', name: 'body', widget: 'markdown'}
```