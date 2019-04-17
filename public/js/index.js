var socket = io();
socket.on('connect' ,function() {
  console.log("connected to server");

  socket.emit('createMessage', {
    from:'reva',
    text:'hi welcome'
  });

  /*socket.emit('createEmail', {
    to:'reva@ema.com',
    text:'hi'
  });*/
});
socket.on('disconnect' ,function()  {
  console.log("disconnected from server");
});

socket.on('newMessage',function(message){
  console.log('new message',message);
});

socket.on('newEmail',function(email){
  console.log('new email',email);
});
