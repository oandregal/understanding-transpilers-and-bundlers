'use strict';

var _default = require('../exports/default.input');

var _default2 = _interopRequireDefault(_default);

var _named = require('../exports/named.input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('constants.BAR is ', _default2.default.BAR);
console.log('constants.FOO is ', _default2.default.FOO);
console.log('FOO is ', _named.FOO);
console.log('BAR is ', _named.BAR);
