---
title: "First"
date: 2019-11-26T22:43:31Z
draft: true
---

## How to add a new Hugo site to an existing directory?

If the directory is not empty, might have a *.git* folder and/or a README file `hugo new site` will fail. 

So you need to force it: from outside the site use:

`hugo new site foldername --force`