var socket = io();
socket.on('connect' ,function() {
  console.log("connected to server");



  /*socket.emit('createEmail', {
    to:'reva@ema.com',
    text:'hi'
  });

  socket.on('newEmail',function(email){
    console.log('new email',email);
  });

  */
});
socket.on('disconnect' ,function()  {
  console.log("disconnected from server");
});

socket.on('newMessage',function(message){
  console.log('new message',message);
});
