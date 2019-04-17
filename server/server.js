const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.on('createMessage',(message)=>{
    console.log(" createMessage",message);
  });
  socket.emit('newMessage',{
    from:'pratibha',
    text:'hey,whats going on',
    createdAt:12322
  });

socket.emit('newEmail',{
  from:'pa@gmail.com',
  text:'hey,whats going on',
  createdAt:123
});

/*
socket.on('createEmail',(newEmail)=>{
  console.log(" createEmail",newEmail);
});*/

socket.on('disconnect', () => {
  console.log(" user disconnected");
});
});
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
