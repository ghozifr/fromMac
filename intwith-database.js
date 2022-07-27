
const http = require('http')
const fs = require('fs')

//GET requrest handler
const handleGetRequest = (req, res) => {
    if(req.url === '/users') {
        // loads the database and searches for data
        makeDatabaseRequest('users', (err, payload) => {
            if(err) {
                res.writeHeader(400)
                res.write('Error retrieving data')
            }else{
                // Process successful request
                console.log(payload)
                res.writeHeader(200, {"Content-Type": "application/json"})
                res.write(JSON.stringify(payload))
            }
            res.end()
        })
    }
}

// Creates server instance
const server = htttp.createServer((req, res) => {
    const {method} = req

    switch(method) {
        case 'GET':
            return handleGetRequest(req, res)
            default:
                throw new Error(`Unsupported request method: ${method}`)
    }
})

