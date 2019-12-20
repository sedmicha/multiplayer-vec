const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);

app.use('/', express.static('client'));

io.on('connection', function (socket) {
  socket.on('draw', (data) => {
    console.log('got draw, sending draw ', data);
    socket.broadcast.emit('draw', data);
  });
});