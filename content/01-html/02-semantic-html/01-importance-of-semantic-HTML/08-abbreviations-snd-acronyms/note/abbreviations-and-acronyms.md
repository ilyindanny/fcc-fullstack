---
title: Abbreviations And Acronyms
---

#### Abbreviations And Acronyms


Basics: {.marker}  

- Use the `<abbr>` tag
- `title` attribute provides the full meaning
- Hover shows a tooltip with the full term
- No visible change by default
- `<acronym>` is obsolete — do not use it


Examples: {.marker}

`<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>` {.language-html}

`<p><abbr title="Cascading Style Sheets">CSS</abbr> makes pages look good.</p>` {.language-html}

`<p><abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>` {.language-html}

Rendered: {.marker}

<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>


When to Use: {.marker}
- At the first mention of an abbreviation
- If the meaning might not be obvious
- For accessibility (screen readers, tooltips)


Optional Styling: {.marker}

```css
abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
}
```