---
title: Link Element
---

#### Link Element

The `<link>` element is used to link to external resources

Often times you will see multiple link elements inside a professional codebase that link to different stylesheets, fonts, and icons.

Code Example: {.marker}  

`<link rel="stylesheet" href="./styles.css">` {.language-html}

rel attribute: {.marker}  

The `rel` attribute (short for "relationship") defines the type of relationship between the current HTML document and the linked external resource. This helps the browser understand the purpose of the link.

Common rel values: {.marker}  

- `stylesheet` – links to an external CSS file
- `icon` – specifies a favicon (browser tab icon)
- `preload` – hints the browser to preload a resource for better performance
- `author` – provides a link to the author of the document
- `alternate` – indicates an alternative version of the page (e.g., RSS feed)
- `manifest` – links to a web app manifest file

href attribute {.marker}  

The `href` attribute is used to specify the location of the URL for the external resource.