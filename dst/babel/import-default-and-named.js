"use strict";

var _exportDefault = require("./export-default");

var _exportDefault2 = _interopRequireDefault(_exportDefault);

var _exportDefaultAndNamed = require("./export-default-and-named");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("BAR is ", _exportDefault2.default.BAR);
console.log("FOO is ", _exportDefault2.default.FOO);
console.log("FOOBAR is ", _exportDefaultAndNamed.foobar);