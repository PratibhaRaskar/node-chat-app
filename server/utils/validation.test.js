const expect = require('expect');

const {isRealString}= require('./validation');

describe('isRealString',() => {

  it('should reject non-string values', ()=> {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only sapces', ()=> {
    var res = isRealString('          ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space character', ()=> {
    var res = isRealString('  vv vvv ');
    expect(res).toBe(true);
  });

})