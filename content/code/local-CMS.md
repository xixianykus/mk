---
title: Local CMS
date: 2020-07-17T14:03:16+01:00
draft: false
summary: Running Decap CMS locally
tags:
  - git
  - Decap CMS
image: /images/ravenstor-green-alternative.jpg
---

You can run Decap CMS locally through the Hugo server. To do so you you must first run the Decap server. 

1. Add the line: `local_backend: true` as the very first line of your Decap CMS's config file[^1].
2. Make sure Node JS installed with npm.
3. Run `npx decap-server` from the root of your project.
4. In another terminal run `hugo server`.
5. Go to your browser to localhost:1313 and add */admin* to the end of the localhost port number.

> However you need to enable Git summat or other to be able to login. I also think edits done this way will be to the GitHub repo NOT the local one.

Nevertheless this is a good way to look at the code and figure out any CSS changes.


[^1]: You *may* also need to set the backend name value to `git-gateway`:

```yaml
backend: 
  name: git-gateway
``` 
