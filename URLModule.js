
const url = new URL('http://www.example.com/p/a/t/h?query=string')

const host = url.hostname // example.com
const pathname = url.pathname // /p/a/t/h
const searchParams = url.searchParams // {query: ' string'}

const createdUrl = new URL('https://www.example.com')
createdUrl.pathname = 'p/a/t/h'
createdUrl.search = '?query=string'

createdUrl.toString() // Creates https://www.example.com/p/a/t/h?query=string
