const fs = require('fs').promises;
const path = require('path');

const LOG_FILE = path.join(__dirname, 'processed-void-elements.log');
const BASE_PATH = __dirname;

// Читаем лог как Set относительных путей
async function readLog() {
  try {
    const data = await fs.readFile(LOG_FILE, 'utf-8');
    return new Set(data.split('\n').filter(Boolean));
  } catch (err) {
    if (err.code === 'ENOENT') return new Set(); // Лог ещё не создан
    throw err;
  }
}

// Записываем относительный путь в лог
async function appendToLog(absolutePath) {
  const relativePath = path.relative(BASE_PATH, absolutePath);
  await fs.appendFile(LOG_FILE, relativePath + '\n', 'utf-8');
}

// Основная функция
async function updateVoidElements(startPath) {
  const processed = await readLog();

  try {
    const items = await fs.readdir(startPath);

    for (const item of items) {
      const itemPath = path.join(startPath, item);
      const stats = await fs.stat(itemPath);

      if (stats.isDirectory()) {
        if (item === 'note') {
          const relativePath = path.relative(BASE_PATH, itemPath);

          if (!processed.has(relativePath)) {
            const success = await processNoteDirectory(itemPath);
            if (success) {
              await appendToLog(itemPath);
              console.log(`[Лог обновлён] Добавлено: ${relativePath}`);
            }
          } else {
            console.log(`[Пропущено] Уже обработано: ${relativePath}`);
          }
        } else {
          await updateVoidElements(itemPath); // Рекурсивно
        }
      }
    }
  } catch (err) {
    console.error('Ошибка при чтении директории:', startPath, err);
  }
}

// Обработка markdown-файла
async function processNoteDirectory(notePath) {
  try {
    const files = await fs.readdir(notePath);
    const markdownFile = files.find(file => path.extname(file) === '.md');

    if (markdownFile) {
      const filePath = path.join(notePath, markdownFile);
      const content = await fs.readFile(filePath, 'utf-8');

      // Замена всех " />" на ">"
      const updatedContent = content.replace(/ \/>/g, '>');

      await fs.writeFile(filePath, updatedContent, 'utf-8');
      console.log(`[Обновлено] Void-элементы в: ${filePath}`);
      return true;
    } else {
      console.log(`[Пропущено] Markdown файл не найден в: ${notePath}`);
      return false;
    }
  } catch (err) {
    console.error('Ошибка при обработке note:', notePath, err);
    return false;
  }
}

// Запуск
const startDirectory = __dirname;

console.log('Начинаю поиск и обновление void-элементов...');
updateVoidElements(startDirectory).then(() => {
  console.log('Обновление завершено.');
}).catch(err => {
  console.error('Произошла общая ошибка:', err);
});