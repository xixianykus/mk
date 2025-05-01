---
title: "Deprecated  @import in SASS"
linktitle: "@import in SASS"
date: 2025-05-01T11:05:58+01:00
draft: false
summary: "A quick way to update old SASS from the now deprecated @import statement"
---

There's lots on the web with far more detail than this but this is the quick way.


1. Change `@import` rules to start with `@use` instead.
2. If a SASS component like a variable is used in a different file to where it was created:
   1. Preface the variable with the folder name and a dot. So if a variable `$green` was defined in the `colours.scss` file using it in another file it should be written as `colours.$green`.
   2. At the top of that *different* file use an `@use` statement referring to the original file. For example `@use colours;`. This is a path to the file containing the variable definition. 

NB1. Unlike `@import` the `@use` rule does not make everything globally available.

NB2. In your main SCSS file you don't need to have an `@use` for every file. Only those called in that main SCSS file.

## Shortcuts

To avoid prefacing every instance of our `$green` variable with `colours.$green` you can use `as` to change it.

Written as `@use colours as *;` at the top of the file means you can now use `$green` rather than `colours.$green`.

Another way is instead of using an asterisk is to define your own term. You might use a `c` to save time writing `colours.$green`:

```scss
@use colours as c;
```

You can now write `c.$green` in your file instead of `colours.$green`.


## `@use` vs `@forward`

Using `@use` means we're going to use it in that file. When using `@forward` it means we're using to send back out. If you have a lot of files and don't want to write `@use` statements at the top of each importing file you can create special file called `index.scss`.

There's much more to these changes in SASS such as using the `@forward` rule. A good resources is [Kevin Powell's video](https://youtu.be/CR-a8upNjJ0) on the topic.

