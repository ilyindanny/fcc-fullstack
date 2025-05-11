// импорт функции

const { convertMarkdownToHtml } = require('./markdownToHtml');

// scripts/process-lessons.js

const fs = require('fs');
const path = require('path');

// Путь к папке с уроками
const lessonsDir = path.join(__dirname, '..', 'docs', 'lessons');

// Получаем список всех файлов .html
const files = fs.readdirSync(lessonsDir).filter(file => file.endsWith('.html'));

files.forEach(filename => {
  const filePath = path.join(lessonsDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Находим <main><article>...</article></main>
  const match = content.match(/<main>\s*<article[^>]*>([\s\S]*?)<\/article>\s*<\/main>/i);
  if (!match) {
    console.warn(`Файл ${filename}: не найден <main><article>...</article></main>`);
    return;
  }

  const originalMarkdown = match[1]; // Это markdown-текст
  const transformed = convertMarkdownToHtml(originalMarkdown);
  
  // Подставляем обратно
  const updated = content.replace(match[1], transformed);
  fs.writeFileSync(filePath, updated, 'utf-8');

  console.log(`Файл обработан: ${filename}`);
});

require('./content.js'); 