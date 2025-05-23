// scripts/markdownToHtml.js

const MarkdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItDeflist = require('markdown-it-deflist')
const markdownItSup = require('markdown-it-sup')
const markdownItSub = require('markdown-it-sub')

function convertMarkdownToHtml(markdown) {
    markdown = markdown.replace(/\t/g, '    ') // заменить табы на 4 пробела

    const md = new MarkdownIt({
        html: true // 👈 разрешаем встроенный HTML
    })
	.use(markdownItAttrs)
	.use(markdownItDeflist)
	.use(markdownItSup)
	.use(markdownItSub)

    const html = md.render(markdown)

    return html
}

module.exports = { convertMarkdownToHtml }

/*
Markdown to HTML converter with support for embedded HTML and custom attributes.

Features enabled:
- HTML inside markdown (`html: true`) allows writing raw HTML blocks directly in .md files.
- `markdown-it-attrs` plugin enables setting CSS classes, IDs, and other attributes on markdown elements.

Syntax examples (place attrs in `{}` right after the element):

## Headers:
## Title {.my-class} → <h2 class="my-class">Title</h2>

Paragraphs:
Regular text {#main .highlight} → <p id="main" class="highlight">Regular text</p>

Images:
![Alt](img.jpg){.img-responsive} → <img src="img.jpg" alt="Alt" class="img-responsive">

Links:
[Google](https://google.com){target="_blank"} → <a href="..." target="_blank">...</a>

Code blocks (fenced):
```js {.my-code}
console.log("hi");
```
→ <pre><code class="language-js my-code">...</code></pre>

Inline code:
`code`{.inline-code} → <code class="inline-code">code</code>

Notes:
- Attributes apply to the element immediately before the `{}` block.
- You can combine multiple: {.class #id attr="value"}.
- Works with most block-level and inline elements.
- Plugins must be applied in the correct order in the markdown-it chain.
*/