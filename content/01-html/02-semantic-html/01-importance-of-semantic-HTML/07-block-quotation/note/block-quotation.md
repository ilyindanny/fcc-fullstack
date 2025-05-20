---
title: Quoted Elements
---

#### Quoted Elements in HTML

Quoted elements help distinguish quotes from surrounding text.

##### Block Quotes

Use `<blockquote>` for extended quotations from other sources.

- Element: `<blockquote>`
- Attribute: `cite="URL"` — source (not visible in UI)

Usage: {.marker}  

```html
<blockquote cite="https://example.com">
  Long  text...
</blockquote>
```

- You can use `<p>` inside for multi-paragraph quotes.
- To show source visually, use `<cite>` outside:

```html
<p>—Author, <cite>Title of the Work</cite></p>
```

##### Inline Quotes

Use `<q>` for short, inline quotations.

- Element: `<q>`
- Attribute: `cite="URL"` — source (invisible)

Usage: {.marker}
`<p>He said, <q cite="...">"Do it now."</q></p>` {.language-html}

- Most browsers add quotation marks automatically.

##### Notes

- `<cite>` is for titles of creative works, not for URLs.
- To link the source, use `<a>` inside `<cite>` (not recomended)