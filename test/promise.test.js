var assert = require("assert");
var promise = require('../src/promise').promise;

describe('Promise', function() {
  it('should make a promise from a classmethod', function (done) {
    class SuperNiceClass {
      @promise
      bar(a) {
        return a + 10;
      }
    }

    new SuperNiceClass().bar(10)
      .then(function(result){
        assert.equal(result, 20);
        done();
      })
      .catch(err => done(err));
  });

  it('should make a promise from a classmethod and result in a rejected promise when throwing an error', function (done) {
    class SuperNiceClass {
    @promise
      bar(a) {
        throw new Error("Can't do it");
        return a + 10;
      }
    }

    new SuperNiceClass().bar(10)
      .then(function(result){;
        done('Should not be executed');
      })
      .catch(err => done());
  });

});