---
title: "CMS Config File"
date: 2021-10-17T19:41:30+01:00
draft: false
summary: "The CMS config file"
tags: 
- Decap CMS
---

Here is what the configuration file for the Netlify CMS looks like. It's written in YAML.

Note that the max size of the image use in the `logo_url` field is 300px wide. If it's larger it will be sized at 300px anyway. If it's smaller it's not centred so looks a little out of balance.


```yaml
# local_backend: true is used to allow use of the CMS locally
local_backend: false

backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)
display_url: https://testsitezero.netlify.app  # displays the url in the CMS interface
site_url: https://testsitezero.netlify.app # used by the CMS for various things
publish_mode: editorial_workflow # hopefully will allow the use of draft edits
logo_url: https://testsitezero.netlify.app/images/testsite0-8.png
media_folder: "static/images"
# media_library:
#   name: cloudinary
#   config:
#     cloud_name: xxxxxxx
#     api_key: xxxxxxxxxxx
public_folder: "/images"  # this where images are found in the published site. img src= use this path.


collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    create: true
#    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
#    slug: '{{slug}}'
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Link Title', name: 'linktitle', widget: 'string', required: false }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Summary', name: 'summary', widget: 'string' }
      - { label: 'Tags', name: 'tags', widget: 'list', required: false }
      - label: 'address'
        name: 'Address'
        widget: 'object'
        required: false
        fields:
         - label: 'Name'
           name: 'name'
           widget: 'string'
           required: false
         - label: 'First line'
           name: 'line_1'
           widget: 'string'
         - label: 'Town'
           name: 'town'
           widget: 'string'
      - label: 'featured image'
        name: 'image'
        widget: 'image'
        required: false
        # media_folder: '/images/'
      - { label: 'Body', name: 'body', widget: 'markdown' }


  - name: 'code'
    label: 'Code'
    folder: 'content/code'
    create: true
#    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
#    slug: '{{slug}}'
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Link Title', name: 'linktitle', widget: 'string', required: false }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Summary', name: 'summary', widget: 'string' }
      - { label: 'Tags', name: 'tags', widget: 'list', required: false }
      - label: 'featured image'
        name: 'image'
        widget: 'image'
        required: false
        # media_folder: '/images/'
      - { label: 'Body', name: 'body', widget: 'markdown' }


  - name: 'test'
    label: 'Test'
    folder: 'content/test'
    create: true
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Link Title', name: 'linktitle', widget: 'string', required: false }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Summary', name: 'summary', widget: 'string' }
      - { label: 'Tags', name: 'tags', widget: 'list', required: false }
      - label: 'featured image'
        name: 'image'
        widget: 'image'
        required: false
        # media_folder: '/images/'
      - { label: 'Body', name: 'body', widget: 'markdown' }


  - name: 'pages'
    label: 'Pages'
    folder: 'content'
    create: true
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string'}
      - { label: 'Link Title', name: 'linktitle', widget: 'string', required: false }
      - { label: 'Body', name: 'body', widget: 'markdown'}


#    create: false
#    slug: '{{slug}}'

    
```