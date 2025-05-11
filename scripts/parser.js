const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../content');
const TEMPLATE_FILE = path.join(__dirname, '../templates/lesson.html');
const OUTPUT_DIR = path.join(__dirname, '../docs/lessons');
const TREE_FILE = path.join(__dirname, '../data/tree.json');

// Удаляет лишние символы и пробелы
function cleanText(str) {
  return str.replace(/[^a-zA-Zа-яА-ЯёЁ0-9 _-]/g, '').trim();
}

// Собирает все markdown-файлы с frontmatter и контентом
function collectLessons(dir) {
  const lessons = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(raw);
        lessons.push({ path: fullPath, data, content });
      }
    }
  }

  walk(dir);
  return lessons;
}

// Генерация HTML-файлов лекций
function generateLessons(lessons) {
  const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  lessons.forEach((lesson, index) => {
    const title = cleanText(lesson.data.title || `Lesson ${index + 1}`);
    const rawMarkdown = lesson.content;
    const lessonId = String(index + 1).padStart(4, '0');

    const outputFilename = `lesson-${lessonId}.html`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    const filled = template
      .replace(/{{ title }}/g, title)
      .replace(/{{ topic }}/g, lesson.data.topic || '')
      .replace(/{{ content }}/g, rawMarkdown)
      .replace(/{{ lessonId }}/g, lessonId);

    fs.writeFileSync(outputPath, filled, 'utf-8');
    console.log(`[parser] Created: ${outputFilename}`);

    lesson.outputFilename = outputFilename;
  });
}

// Построение и сохранение структуры курса
function buildTree(lessons) {
  const topics = {};

  lessons.forEach(lesson => {
    const relativePath = path.relative(CONTENT_DIR, lesson.path);
    const parts = relativePath.split(path.sep);

    // Ожидается структура: topicDir/subtopicDir/note/*.md
    const topicDir = parts[0];
    const subtopicDir = parts[1];

    const topicPath = path.join(CONTENT_DIR, topicDir, 'topic.md');
    const subtopicPath = path.join(CONTENT_DIR, topicDir, subtopicDir, 'subtopic.md');

    const topicRaw = fs.existsSync(topicPath) ? fs.readFileSync(topicPath, 'utf-8') : '';
    const subtopicRaw = fs.existsSync(subtopicPath) ? fs.readFileSync(subtopicPath, 'utf-8') : '';

    const topicData = matter(topicRaw).data || {};
    const subtopicData = matter(subtopicRaw).data || {};

    if (!topics[topicDir]) {
      topics[topicDir] = {
        title: topicData.title || topicDir,
        order: topicData.order || 0,
        subtopics: {}
      };
    }

    if (!topics[topicDir].subtopics[subtopicDir]) {
      topics[topicDir].subtopics[subtopicDir] = {
        title: subtopicData.title || subtopicDir,
        order: subtopicData.order || 0,
        lessons: []
      };
    }

    topics[topicDir].subtopics[subtopicDir].lessons.push({
      title: lesson.data.title || 'Untitled',
      filename: lesson.outputFilename
    });
  });

  // Сортировка и преобразование в массив
  const result = Object.values(topics)
    .sort((a, b) => a.order - b.order)
    .map(topic => ({
      title: topic.title,
      order: topic.order,
      subtopics: Object.values(topic.subtopics)
        .sort((a, b) => a.order - b.order)
        .map(subtopic => ({
          title: subtopic.title,
          order: subtopic.order,
          lessons: subtopic.lessons
        }))
    }));

  fs.mkdirSync(path.dirname(TREE_FILE), { recursive: true });
  fs.writeFileSync(TREE_FILE, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`[parser] Saved: tree.json`);
}

// Главная функция
function runParser() {
  const all = collectLessons(CONTENT_DIR);
  const notes = all.filter(lesson => lesson.path.includes(`${path.sep}note${path.sep}`));

  generateLessons(notes);
  buildTree(notes);
}

runParser();
require('./process-lessons.js');