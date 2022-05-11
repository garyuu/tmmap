const express = require('express');
const fs = require('fs');
const app = express();
const port = 28080;

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

