// scripts/markdownToHtml.js

const MarkdownIt = require('markdown-it')

function convertMarkdownToHtml(markdown) {
    markdown = markdown.replace(/\t/g, '    ') // заменить табы на 4 пробела

    const md = new MarkdownIt()

    const html = md.render(markdown)

    return html
}

module.exports = { convertMarkdownToHtml }
