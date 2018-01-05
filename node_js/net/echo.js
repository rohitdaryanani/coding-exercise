const { createServer } = require('net');

createServer(socket => {
  socket.on('data', data =>
    socket.write(`${date.toLocaleString()} ${data.toString()}`)
  );
}).listen(31773);
