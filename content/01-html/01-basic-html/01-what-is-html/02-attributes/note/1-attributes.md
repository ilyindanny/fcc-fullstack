---
title: HTML Tag Attributes
---

#### HTML Tag Attributes

An attribute is a value placed inside the opening tag of an HTML element. Attributes provide additional information about the element or specify how the element should behave.

`<tag attribute="value">` {.language-html}

##### Common HTML Attributes:  

`<a>`{.marker}  

- `<a href="https://www.example-website.com">` {.language-html}
    

`<img>`{.marker}  

- `<img src="image.jpg" alt="A beautiful image" />` {.language-html}
    

`<input>`{.marker}  

- `<input type="checkbox" checked>`{.language-html} — checkbox is checked
- `<input type="text" disabled>`{.language-html} — not editable
- `<input type="text" readonly>`{.language-html} — visible but unchangeable
- `<input type="text" required>`{.language-html} — must be filled


##### Boolean Attributes

- `<input checked>`{.language-html} \= `<input checked="checked">`{.language-html}
    
- If present = **true**, if missing = **false**