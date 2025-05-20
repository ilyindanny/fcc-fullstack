---
title: Semantic HTML
---

#### Semantic HTML

What is the difference Between Presentational and Semantic HTML?

Presentational HTML focuses on how content looks (appearance and style). Now this approach is deprecated.  
Semantic HTML focuses on the meaning and structure of the content. It uses elements that describe the role of the content clearly.

##### Modern Best Practices for Text Highlighting and Emphasis

Common semantic tags for emphasis and meaning: {.marker}  

- `<strong>` — for important or strong emphasis (typically bold)
- `<em>` — for stressed or emphasized text (typically italic)
- `<del>` — for deleted or removed content (shows as strikethrough)
- `<ins>` — for inserted content (usually underlined)
- `<mark>` — for highlighted text (background color)
- `<small>` — for side comments or fine print (smaller font)
- `<code>` — for inline code snippets
- `<sub>` and `<sup>` — for subscripts and superscripts (e.g., chemical formulas or exponents)
- `<i>` - highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts: `<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>`

Example: {.marker}  

```html
<p>Please <strong>read</strong> the <em>instructions</em> carefully.</p>
<p>Old price: <del>$50</del>, New price: <ins>$40</ins></p>
<p>Submit your form <mark>by Friday</mark>.</p>
<p>Water formula: H<sub>2</sub>O, Einstein’s equation: E = mc<sup>2</sup>.</p>
<p>Use the <code>printf()</code> function in your C program.</p>
```

To style a specific part of text visually without adding meaning, use `<span>` with CSS:

`<p>This is a <span class="highlight">highlighted</span> word.</p>` {.language-html}

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

##### Deprecated Presentational Tags  

- `<font>` — for font size and color
- `<center>` — for centering content
- `<big>` — for bigger text
- `<b>` and `<i>` — for styling only
- `<strike>` and `<s>` — for strikethrough