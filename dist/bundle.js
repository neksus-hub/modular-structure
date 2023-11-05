(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const one = require("./modules/one");
const two = require("./modules/two");
const library = require("./modules/badscript");

one();
two();
library();

},{"./modules/badscript":2,"./modules/one":3,"./modules/two":4}],2:[function(require,module,exports){
const firstModule = () => {
  const one = "this is first module";
  console.log(one);
};

module.exports = firstModule;

const secondModule = () => {
  const two = "this is second module";
  console.log(two);
};

module.exports = secondModule;

},{}],3:[function(require,module,exports){
const firstModule = () => {
  const one = "one.js";
  console.log(one);
};

module.exports = firstModule;

},{}],4:[function(require,module,exports){
const secondModule = () => {
  const two = "two.js";
  console.log(two);
};

module.exports = secondModule;

},{}]},{},[1]);
