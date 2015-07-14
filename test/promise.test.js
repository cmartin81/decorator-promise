
var assert = require("assert");
var promise = require('../src/promise').makePromise;
var wrap = require('decorator-wrap').wrap;

describe('Promise', function() {
  it('should make a promise from a classmethod', function (done) {
    var log = (callback, args, name, type) => {
      console.log('Starting  ', type, name);
      var result = callback();
      console.log('Ended: ', name);
      done();
      return result;
    };

    class SuperNiceClass {
      @wrap(promise)
      bar(a) {
        return a + 10;
      }
    }

    new SuperNiceClass().bar(10)
      .then(function(ss){
        console.log(ss)})
    .then(result => assert.equal(result, 20));
  });


});