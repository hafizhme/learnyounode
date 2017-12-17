const http = require('http');
const map = require('through2-map');

let server = http.createServer((req, res)=> {
  if (req.method == 'POST') {
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }
})

server.listen(process.argv[2])
