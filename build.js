// server.js
const http = require('http');
const path = require('path');
const fs = require('fs');

require('./scripts/parser.js');


// Путь к директории, где будут храниться сгенерированные HTML файлы
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

    // Расширение по умолчанию — .html
    const extname = path.extname(filePath) || '.html';

    // MIME-типы
    const contentTypeMap = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.txt': 'text/plain'
    };

    const contentType = contentTypeMap[extname] || 'application/octet-stream';

    // Чтение файла
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Файл не найден
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Ошибка сервера
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Порт обязательно 80 для Node.js Lab
server.listen(80, () => {
    console.log('Server is running on port 80');

    // Node.js Lab Web Application detection
    setTimeout(function () {
        if (process.env.NODELAB === "true") {
            webAppReady();
        }
    }, 1000);
});