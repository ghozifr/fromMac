
// const str = 'prop1=value1&prop2=value2'

// querystring.parse(str) // returns { prop1: value1, prop2: value2}

// const props = {"prop1": value1, "prop2": value2}
// querystring.stringify(props) // returns 'prop1=value1&prop2=value2'

const querystring = require('querystring')
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';


const queryToParse = url.split('?')[1]
console.log(queryToParse)
const parsedQuery = querystring.parse(queryToParse)

parsedQuery.exercise = 'querystring'

const modifiedQueryString = querystring.stringify(parsedQuery)


