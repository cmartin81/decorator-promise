let wrap = require('decorator-wrap').wrap;
let Q = require('q');

var makePromise = function(callback){
  return Q.fcall(function () {
    return callback();
  });
};

export function promise(target, key, descriptor) {
  return wrap(makePromise)(target, key, descriptor);
}

