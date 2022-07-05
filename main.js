// continue from pc
// 6 7 22

//// Async/Await

// Creating a new promise that runs the function in the setTimeout
// after 5 seconds.
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 5000)
})

// Creating an asynchronous function using an arrow expression and saving
// it to the variable asyncFunction.
const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult.
    const finalResult = await newPromise
    
    // Longging the result of the promise to the console
    console.log(finalResult)
}

//asyncFunction()
//
//
//// setInterval() and setTimeout()

// Defining a function that instantiates setInterval
const showAlert = () => {
    // Calling setInterval() and passing  a function that shows an alert every 5 seconds.
    setInterval(() => {
        console.log('I show every 5 seconds!')
    }, 5000)
}

// Calling the newInterval() function that calls the setInterval
showAlert()

// Defining a function that calls setTimeout
const showTimeout = () => {
    // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
    setTimeout(() => {
        console.log('I only show once after 5 seconds!')
    }, 5000)
}
// Calling the showTimeout() function
//showTimeout()