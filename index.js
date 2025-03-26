const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const server = http.createServer((req, res) => {
    

    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading the HTML file');
            console.log(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
  });
});

app.use(express.static('/'));

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});