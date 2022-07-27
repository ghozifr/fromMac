const http = require('http')

const server = http.createServer((req, res) => {

    // set status and headers
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    res.end('Hello world\nconnected')
})

server.listen(8080)