'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.promise = promise;
var wrap = require('decorator-wrap').wrap;
var Q = require('q');

var makePromise = function makePromise(callback) {
  return Q.fcall(function () {
    return callback();
  });
};

function promise(target, key, descriptor) {
  return wrap(makePromise)(target, key, descriptor);
}