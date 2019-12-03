---
title: "Netlify CMS"
date: 2019-11-28
draft: true
categories: "CMS"
tags: ["netlify", "CMS", "hugo"]
summary: "An example of the Netlify CMS config file."
---


>> This is an independent, open source project, that can be used on Netlify and anywhere else. The hope is it will become the JamStack equivalent to Wordpress.

>> --[NetlifyCMS.org](https://www.netlifycms.org/) for more.

Configuration is done using the `static/admin/config.yml` file.

Details on how to congfigure this file are [here](https://www.netlifycms.org/docs/configuration-options).

Here's an extract from the all important *collections* part of a Netlify CMS YAML file:

```yml
collections: # A list of collections the CMS should be able to edit
  - name: "post" # Used in routes, ie.: /admin/collections/:slug/edit
    label: "Post" # Used in the UI, ie.: "New Post"
    folder: "site/content/post" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    fields: # The fields each document in this collection have
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Intro Blurb", name: "description", widget: "text"}
      - {label: "Image", name: "image", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
  - name: "pages"
    label: "Pages"
    files:
      - file: "site/content/_index.md"
        label: "Home Page"
        name: "home"
        fields:
          - {label: Title, name: title, widget: string}
          - {label: Subtitle, name: subtitle, widget: string}
          - {label: Image, name: image, widget: image}
          - {label: "Blurb", name: blurb, widget: object, fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Intro", name: intro, widget: object, fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Products", name: products, widget: list, fields: [
              {label: "Image", name: "image", widget: "image"},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Values", name: "values", widget: "object", fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
      - file: "site/content/contact/_index.md"
        label: "Contact Page"
        name: "contact"
        fields:
          - {label: Title, name: title, widget: string}
          - {label: Logo, name: logo, widget: image}
          - {label: Body, name: body, widget: markdown}
          - label: Contact Entries
            name: contact_entries
            widget: list
            fields:
              - label: Heading
                name: heading
                widget: string
              - label: Text
                name: text
                widget: text
```


## GitLab and publish_mode

Publish mode allows one to save drafts. However currently only GitHub supports this feature of Netlab CMS.

`publish_mode: editorial_workflow`