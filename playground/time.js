var moment = require('moment');

/*  var date = moment();
  date.add(10,'year').subtract(2,'months')
console.log(date.format('MMM Do YYYY'));
console.log(date.format('h:mm a'))
*/

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;

var date = moment(createdAt);

console.log(date.format('h:mm a'));
