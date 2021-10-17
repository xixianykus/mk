---
title: "Setting Up Netlify Cms"
date: 2021-10-17T17:03:45+01:00
draft: false
summary: "Some notes on setting up Netlify CMS"
---

Although Netlify CMS is an open source project it is, at this time, easier to set up with a Netlify account and also from GitHub.

The Netlify account makes it easier to set up authentication from GitHub. You can find this in the Netlify interface under the `Identity/Danger zone` section of the specific site. You need to enable the Git Gateway here and provide a GitHub api access token. 

## From Netlify

You can generate the access token from within the Netlify interface. From the site's settings (far right end of the menu) click on `Idenity` then `Danger zone` and under services find the `Git Gateway` section click on the `edit settings` button and click on the `Generate access token in GitHub` link.

A new token will appear, then click `save` and the new token is replaced with astericks.

## From GitHub

To generate a PAT (personal access token) from GitHub click on your profile pic (top right) and choose settings. These are different from the setting for each repo.

![GitHub developer settings button](/images/github-dev-settings.png)

From here you can choose Personal Access Tokens and click generate a new token.

![GitHub Personal Access Tokens section](/images/github-pat-section.png)

Add a note and set the expiration date and click the sections on the form.

### Expiration of access tokens

From GitHub:

> As a security precaution, GitHub automatically removes personal access tokens that haven't been used in a year. To provide additional security, we highly recommend adding an expiration to your personal access tokens.

More on [Netlify Identity](https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui) in Netlify docs

[Creating a personal ccess token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) on GitHub