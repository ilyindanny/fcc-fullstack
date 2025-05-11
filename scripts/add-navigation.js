const fs = require('fs');
const path = require('path');

const TREE_PATH = path.join(__dirname, '../data/tree.json');
const LESSONS_DIR = path.join(__dirname, '../public/lessons');

const tree = JSON.parse(fs.readFileSync(TREE_PATH, 'utf-8'));

// Создаём линейный список всех лекций
const allLessons = [];
tree.forEach(topic => {
  topic.subtopics.forEach(subtopic => {
    subtopic.lessons.forEach(lesson => {
      allLessons.push({
        title: lesson.title,
        filename: lesson.filename,
        topic: topic.title,
        subtopic: subtopic.title
      });
    });
  });
});

// Обработка каждой лекции
allLessons.forEach((lesson, index) => {
  const filePath = path.join(LESSONS_DIR, lesson.filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`[navigation] File not found: ${lesson.filename}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf-8');

  const prev = allLessons[index - 1];
  const next = allLessons[index + 1];

  // Генерируем ссылки навигации
  const prevLink = prev ? `<a class="prev" href="${prev.filename}">&larr; ${prev.title}</a>` : '<span class="empty"></span>';
  const homeLink = `<a class="home" href="../index.html">Home</a>`;
  const nextLink = next ? `<a class="next" href="${next.filename}">${next.title} &rarr;</a>` : '<span class="empty"></span>';

  const navHtml = `
    <section class="navigation">
      <nav class="lesson-nav">
        ${prevLink}
        ${homeLink}
        ${nextLink}
      </nav>
    </section>
  `;

  // Заменяем маркер {{ navigation }}
  if (html.includes('{{ navigation }}')) {
    html = html.replace('{{ navigation }}', navHtml);
  } else {
    console.warn(`[navigation] Placeholder {{ navigation }} not found in: ${lesson.filename}`);
  }

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`[navigation] Updated: ${lesson.filename}`);
});