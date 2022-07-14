
// EventEmitter
// Require in the 'events' core module
let events = require('events')

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter()
//
//

let newUserlisterner = (data) => {
    console.log(`We have a new user: ${data}.`)
}

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserlisterner)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad')
// newUserListener will be invoked with 'Lily Pad'
//
//

// INPUT/OUTPUT
process.stdin.on('data', (userInput) => {
    let input = userInput.toString()
    console.log(input)
})