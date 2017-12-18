const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result = undefined

  res.writeHead(200, {'Content-Type': 'application/json'})
  if (parsedUrl.pathname == '/api/parsetime') {
    result = {
      'hour': time.getHours(),
      'minute': time.getMinutes(),
      'second': time.getSeconds()
    }
  } else if (parsedUrl.pathname == '/api/unixtime') {
    result = {
      'unixtime': time.getTime()
    }
  }
  res.end(JSON.stringify(result))


}).listen(process.argv[2])
