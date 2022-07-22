
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
        })
    }
}