---
title: Code Element
---

#### Code Element

How to display Code in HTML and Markdown.

##### Inline Code (single line)

- Use the `<code>` tag inside a block of text.

Example: {.marker}  

`<p>Use <code>color: blue;</code> to change text color.</p>` {.language-html}  

- Default styling: monospace font.


##### Block Code (multi-line)

- Use a `<pre><code>...</code></pre>`{.language-html} structure.
- `<pre>` preserves spacing, indentation, and line breaks.

Example: {.marker}  

```html
<pre><code>
body {
  color: red;
}
</code></pre>
```


##### In Markdown

Using 'markdown-it-attrs' 

- Adds HTML attributes directly in Markdown.
- Useful for setting:
  - Custom classes (e.g. '.inline-code')
  - Language identifiers for highlighters (e.g. '.language-js')

Example for converting to `<pre><code>`: {.marker}  

<pre><code class="language-markdown">
```js
body {
  color: red;
}
```
</code></pre>

- The <code>```js</code> class enables syntax highlighting.


Example for converting to inline `<code>`: {.marker}  

`color: blue; {.language-css}`

- The `{.language-css}` class enables syntax highlighting.


##### Notes

- `<pre>` renders text exactly as typed (be mindful of indentation).
- Always escape `<`, `>`, `&` if displaying user input.
- Pair with libraries like `Prism.js` or `Highlight.js` for syntax highlighting.
- Best practice: use `<code>` for inline snippets, `<pre><code>` for blocks.
- Avoid nesting `<pre>` inside Markdown code blocks — it can break layout.