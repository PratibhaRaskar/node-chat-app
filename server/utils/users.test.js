const expect = require('expect');

const { Users} = require('./users');

describe('Users',() => {

 var users;
 beforeEach(() => {
    users= new Users();
    users.users = [{
      id: '1',
      name: 'reva',
      room:'node course'
    },
    {
      id: '2',
      name: 'pratibha',
      room:'react course'
    },
    {
      id: '3',
      name: 'nik',
      room:'node course'
    }
  ]
 })
  it('should add a new User', () => {
   var users =  new Users();
   var user = {
     id: '123',
     name:'Andrew',
     room:'The Office Fans'
   };
   var resUser = users.addUser(user.id,user.name,user.room);

   expect(users.users).toEqual([user]);
});

it('should remove a user' , () => {
    var userId= '2';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
});

it('should not remove a user' , () => {
  var userId= '32';
  var user = users.removeUser(userId);
  expect(user).toNotExist;
  expect(users.users.length).toBe(3);
});

it('should find a user' , () => {
  var userId= '2';
  var user = users.getUser(userId);

  expect(user.id).toBe(userId);
});

it('should not find a user' , () => {

  var userId= '55';
  var user = users.getUser(userId);

  expect(user).toNotExist;
});


it('should return names for node course',() => {
  var userList = users.getUserList('node course');
  expect(userList).toEqual(['reva','nik']);
});

it('should return names for react course',() => {
  var userList = users.getUserList('react course');
  expect(userList).toEqual(['pratibha']);
});

});
