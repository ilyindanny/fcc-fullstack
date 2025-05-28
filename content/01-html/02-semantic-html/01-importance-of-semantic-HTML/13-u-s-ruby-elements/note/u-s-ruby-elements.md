---
title: U, S And Ruby Elements
---

#### U, S And Ruby Elements

Underlines, Strikethroughs, and Annotations in HTML  
This group of elements provides **semantic meaning** — not styling — for errors, cancellations, edits, and phonetic annotations.


##### `<u>` — underlined with annotation
  
Semantics: **Unarticulated annotation**, misspellings.  

Not for visual underline.

Example: {.marker}  

`<p>Please fix the <u>speling</u> mistake.</p>` {.language-html}  


##### `<s>` — for some text that is no longer accurate  
Semantics: **Outdated but still visible** text.  

Not for tracking document changes — use `<del>` / `<ins>` instead.

Example: {.marker}  

`<p><s>Meeting at 10am</s> — moved to 2pm.</p>` {.language-html}  


##### `<del>` — deleted content  
Semantics: Text that was **removed in an edited version**. Supports `datetime` and `cite` attrebutes.

Example: {.marker}  

`<p>The color is <del datetime="2024-01-01">green</del>.</p>` {.language-html}  


##### `<ins>` — inserted content  
Semantics: Text that was **added in an edit**. Also supports `datetime`.

`<p>Now it is <ins datetime="2024-01-02">blue</ins>.</p>` {.language-html}  


##### `<ruby>` — phonetic annotation  

Semantics: Small annotations for **pronunciation of East Asian characters**.

- `<rt>` — *ruby text* (the annotation)
- `<rp>` — *ruby parentheses* (fallback for unsupported browsers)

Example: {.marker}  

```html
<ruby>
  明日
  <rp>(</rp><rt>あした</rt><rp>)</rp>
</ruby>
```

Rendered: {.marker}  

<ruby>
  明日
  <rp>(</rp><rt>あした</rt><rp>)</rp>
</ruby>


If ruby is not supported browser will show:  
**明日(あした)** 