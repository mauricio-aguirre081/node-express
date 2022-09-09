// SERVIDOR SIN USAR EXPRESS
/* const http = require ('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const reading = fs.createReadStream('./static/index.html')
    reading.pipe(res)
});

server.listen(3000)
console.log(`server on port ${3000}`) */

const express = require ('express')
const app = express()
app.listen(3000)

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

console.log(`server on por ${3000}`)