let wrap = require('decorator-wrap').wrap;
let Q = require('q');

export function makePromise(callback, args, name, type) {
  console.log(callback)
  if (type === 'function') {
    return Q.fcall(function () {
      return callback();
    });
  } else {
    console.log('hei')
    return callback();
  }
};

export function promise(target) {
  return function() {
    wrap(makePromise);
  }
}
