---
title: Anchor Element
---

## Anchor Element

What is an `<a>` (anchor) element?

Creates a hyperlink to another resource.  
`<a href="https://example.com">Visit</a>` {.language-html}  

### href

Specifies the link destination:  {.mark}  

- Absolute: `href="https://..."`  
- Relative: `href="/about.html"`  


### Types of Links

- Web: `href="https://..."`  
- Email: `mailto:user@example.com"`  
- Phone: `tel:+1234567890"`  
- Anchor: `href="#section"`  
- FTP: `ftp://..."`  
- JavaScript (unsafe): `javascript:..."`  
- Blob/Data: `blob:...`, `data:...`  


### Anchor Links

Jump to element by `id`:  {.mark}  

- `<a href="#top">Back</a>` {.language-html}  
- `<h2 id="top">...</h2>` {.language-html}  


### target

Defines where to open the link:  {.mark}  

- `_blank`: new tab  
- `_self`: same tab (default)  
+ Use `rel="noopener noreferrer"` for security

`<a href="..." target="_blank" rel="noopener noreferrer">` {.language-html}  


### download

Triggers file download:  {.mark}  

`<a href="file.pdf" download>Download</a>` {.language-html}  

Custom name: `download="newname.pdf"`


### Nested Elements

You can nest inline or even block-level elements (HTML5):  

```html
`<a href="/">
    <img src="logo.png" alt="Logo" />
</a>
```


### Avoid

- `href="#"` without JS handler — scrolls to top  
- `javascript:` — insecure  
- Nested `<a><a>...</a></a>` — invalid  
- `<a>` without `href` — not interactive


### Quick Examples

```html
<a href="https://mdn.com">MDN</a>
<a href="#footer">Footer</a>
<a href="mailto:hi@example.com">Email</a>
<a href="tel:+123456789">Call</a>
<a href="file.pdf" download>PDF</a>
<a href="..." target="_blank" rel="noopener noreferrer">New Tab</a>
```