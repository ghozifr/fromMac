
// const http = require('http')
// const server = http.createServer((req, res) => {

//     const {method} = req
//     switch(method) {
//         case 'GET':
//             return handleGetRequest(req, res)
//         case 'POST':
//             return handlePostRequest(req, res)
//         case 'DELETE':
//             return handleDeleteRequest(req, res)
//         case 'PUT':
//             return handlePutRequest(req, res)
//         default:
//             throw new Error(`Unsupported request method: ${method}`)
//     }
// })

// function handleGetRequest(req, res) {
//     const {pathname} = new URL(req.url)
//     let data = {}

//     if(pathname === '/projects') {
//         data = await getProjects()
//         res.setHeader('Content-Type', 'application/json')
//         return res.end(JSON.stringify(data))
//     }

//     res.statusCode = 404;
//     return res.end('Requested resource does not exist')
// }

const http = require('http');

// Handle get request
const handleGetRequest = (req, res) => {
  const pathname = req.url;

  if (pathname === '/users') {
    res.end(JSON.stringify([]));
  }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});