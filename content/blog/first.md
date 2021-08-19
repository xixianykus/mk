---
title: Forcing A New Hugo Site
date: 2019-11-26T22:43:31.000Z
summary: A first post with How to create a new Hugo site in an existing folder
---
![Naval Aviation](/images/NR109a.jpg "Naval Aviation")

## How to add a new Hugo site to an existing directory?

If the directory is not empty, for example there might be a _.git_ folder and/or a README file `hugo new site` will fail. 

So you need to force it: from outside the site use:

```shell
hugo new site foldername --force
```

## Links

This site was created using the instuctions on [Netlify for Hugo](https://www.netlifycms.org/docs/hugo/)
