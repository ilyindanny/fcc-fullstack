---
title: Open Graph
---

#### What Is Open Graph

This is a protocol to control how your website's content appears across various social media platforms, such as Facebook, LinkedIn, and many more.

The first important OG property to include would be the title. Here is an example of setting the OG title for the freeCodeCamp homepage:

`<meta content="freeCodeCamp.org" property="og:title" />` {.language-html}

The whole Head: {.marker}  

```html
    <head>
        <meta charset="utf-8">
        <title>Test</title>
        <meta name="description" content="test page">
        <meta property="og: title" content="test page">
        <meta property="og: type" content="website">
        <meta
            property="twitter: image"
            content="https://www.images.com/image_01">
		<meta
			property="og: url"
			content="https://www.website.com">
    </head>
```