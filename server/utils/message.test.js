var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
   it('should generate correct message object', () => {
     var from = 'jan';
     var text = 'some msg';
     var message = generateMessage(from ,text);

     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({from,text});
   })

});

describe('generateLocationMessage',() => {
   it('should generate correct location object', () => {
     var from = 'nik';
     var latitude = '18';
     var longitude = '73';
     var url ='https://www.google.com/maps?q=18,73';
     var message = generateLocationMessage(from,latitude,longitude);

     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({from,url});
   })

});
