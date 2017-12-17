const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res) => {
  let rs = fs.createReadStream(process.argv[3])
  rs.on('open', () => {
    rs.pipe(res)
  })
})

server.listen(process.argv[2])
