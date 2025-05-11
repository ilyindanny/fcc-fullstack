const fs = require('fs');
const path = require('path');

const treePath = path.join(__dirname, '../data/tree.json');
const tree = JSON.parse(fs.readFileSync(treePath, 'utf-8'));

const OUTPUT_DIR = path.join(__dirname, '../public');

// ====== INDEX PAGE ======

function generateIndexContent() {
  let content = '';

  tree.forEach(topic => {
    content += `<h2>${topic.title}</h2><ul>`;
    
    topic.subtopics.forEach(subtopic => {
      content += `<li><strong>${subtopic.title}</strong><ul>`;
      
      subtopic.lessons.forEach(lesson => {
        content += `<li><a href="lessons/${lesson.filename}">${lesson.title}</a></li>`;
      });

      content += `</ul></li>`;
    });

    content += `</ul>`;
  });

  return content;
}

function saveIndexHtml(content) {
  const templatePath = path.join(__dirname, '../templates/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const filled = template.replace('{{ content }}', content);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), filled, 'utf-8');
  console.log('[index] Created: public/index.html');
}

// ====== ALL PAGE ======

function generateAllContentAndLessons() {
  let content = '';
  let lessons = '';

  tree.forEach(topic => {
    content += `<h2>${topic.title}</h2><ul>`;
    
    topic.subtopics.forEach(subtopic => {
      content += `<li><strong>${subtopic.title}</strong><ul>`;
      
      subtopic.lessons.forEach(lesson => {
        const anchorId = lesson.filename.replace('.html', '');
        content += `<li><a href="#${anchorId}">${lesson.title}</a></li>`;

        const lessonPath = path.join(OUTPUT_DIR, 'lessons', lesson.filename);
        const html = fs.readFileSync(lessonPath, 'utf-8');
        const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        const inner = match ? match[1] : '[no content]';

        lessons += `
          <article id="${anchorId}">
            <h2>${lesson.title}</h2>
            ${inner}
          </article>
          <hr class="lesson-divider">
        `;
      });

      content += `</ul></li>`;
    });

    content += `</ul>`;
  });

  return { content, lessons };
}

function saveAllHtml(content, lessons) {
  const templatePath = path.join(__dirname, '../templates/all.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const filled = template
    .replace('{{ content }}', content)
    .replace('{{lessons}}', lessons);

  fs.writeFileSync(path.join(OUTPUT_DIR, 'all.html'), filled, 'utf-8');
  console.log('[index] Created: public/all.html');
}

// ====== EXECUTION ======

const indexContent = generateIndexContent();
saveIndexHtml(indexContent);

const { content: allContent, lessons: allLessons } = generateAllContentAndLessons();
saveAllHtml(allContent, allLessons);

require("./add-navigation.js");