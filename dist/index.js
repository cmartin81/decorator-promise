'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.promise = promise;
var wrap = require('decorator-wrap').wrap;
var Q = require('q');

var makePromise = function makePromise(callback, args, name, type) {
  if (type === 'function') {
    return Q.fcall(function () {
      return callback();
    });
  } else {
    return callback();
  }
};

function promise() {
  return wrap(makePromise());
}