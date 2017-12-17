const net = require('net');

const server = net.createServer((socket) => {
  da = new Date()
  let data = da.getFullYear().toString() + '-'
           + (da.getMonth()+1).toString().padStart(2,'0') + '-'
           + da.getDate().toString().padStart(2,'0') + ' '
           + da.getHours().toString().padStart(2,'0') + ':'
           + da.getMinutes().toString().padStart(2,'0')
           + '\n'
  socket.end(data)
})

server.listen(process.argv[2])
