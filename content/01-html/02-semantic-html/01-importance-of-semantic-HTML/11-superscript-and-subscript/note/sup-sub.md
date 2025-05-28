---
title: Superscript And Subscript
---

#### Superscript And Subscript Elements

How to display exponents, chemical formulas, and typographic annotations.

##### Superscript

- Use `<sup>` to raise text above the baseline.  

Typical use cases: {.marker}  

  - Math exponents (`2<sup>2</sup>` → 2^2^)
  - Ordinal indicators (`4<sup>th</sup>` → 4ᵗʰ)
  - Abbreviations with superior lettering (e.g. `M<sup>gr</sup>`)

Example: {.marker}

```html
<p>2<sup>2</sup> (2 squared) is 4.</p>
<p><strong>M<sup>gr</sup></strong></p>
```

Rendered: {.marker}  

<p>2<sup>2</sup> (2 squared) is 4.</p>
<p><strong>M<sup>gr</sup></strong></p>


##### Subscript

- Use `<sub>` to lower text below the baseline.

Typical use cases: {.marker}  

  - Chemical formulas (`CO<sub>2</sub>` → CO₂)
  - Mathematical variable subscripts (`x<sub>1</sub>`)
  - Footnotes or annotations

Example: {.marker}

```html
<p>CO<sub>2</sub></p>
```

Rendered: {.marker}  

<p>CO<sub>2</sub></p>


##### Notes

- Superscript and Subscript are only for **semantic**.  
    For visual-only effects use CSS.
- `<sup>` and `<sub>` are **inline elements**.
- Combine with semantic tags (`<strong>`, `<em>`) if needed.