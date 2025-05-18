---
title: ID Element
---

#### ID Element

The `id` attribute assigns a unique identifier to an HTML element. It must be unique across the entire page and can be used to reference the element via CSS, JavaScript, or anchor links.

`<h1 id="title">Movie Review Page</h1>`

##### Purpose

You can reference the `id` name `title` within your CSS or JavaScript. Here's a CSS example referencing the `id` to change the text `color` to `red`:

```html
    #title {
      color: red;
    }
```

##### Linking to an ID

You can use an `id` in a link to jump to a specific section of a page:

`<a href="#title">Jump to Title</a>`