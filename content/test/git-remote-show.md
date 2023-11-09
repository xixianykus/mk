---
title: git remote show
linktitle: git remote show
date: 2023-11-08T19:46:45.495Z
summary: Finding out whether you need to fetch or pull from a git remote branch
tags:
  - git
---
When you need to push a project to a remote git project you might want to know whether or not you're up to date with that project and whether or not you need to *fetch* or *pull* first before pushing upstream.

One way is to use `git status` however you will first have to update your remote info.

```bash
git remote update && git status
git remote update && git status -uno
```

The `git remote update` updates your remote refs. And `git status -uno` gives a more succinct and tidy answer than just `git status`.


See [Stackoverflow page](https://stackoverflow.com/questions/2514270/how-to-check-for-changes-on-remote-origin-git-repository)

## git remote show

The `git remote` command can be useful along with `show.`

`git remote show origin`

For more see the official Git docs page on [working with remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)