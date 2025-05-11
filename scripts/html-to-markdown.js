const fs = require('fs')
const path = require('path')
const TurndownService = require('turndown')
const { JSDOM } = require('jsdom')

// Найдём первый HTML-файл в папке
const files = fs.readdirSync('./')
const htmlFile = files.find(file => file.endsWith('.html'))

if (!htmlFile) {
  console.error('HTML file not found.')
  process.exit(1)
}

// Прочитаем HTML и распарсим его
const html = fs.readFileSync(htmlFile, 'utf-8')
const dom = new JSDOM(html)
const document = dom.window.document

// Извлекаем title и main
const title = document.querySelector('title')?.textContent.trim() || 'Untitled'
const main = document.querySelector('main')?.innerHTML || ''

// Преобразуем main в Markdown
const turndownService = new TurndownService()
const markdownBody = turndownService.turndown(main)

// Собираем финальный markdown
const markdown = `---\ntitle: ${title}\n---\n\n${markdownBody}`

// Определим имя нового файла
const mdFile = path.basename(htmlFile, '.html') + '.md'

// Сохраняем результат
fs.writeFileSync(mdFile, markdown)

console.log(`Converted ${htmlFile} to ${mdFile}`)