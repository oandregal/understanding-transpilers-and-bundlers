var rollupIIFE = (function () {
'use strict';

var constants$1 = function() {
  return {
    HELLO: 'HELLO',
    WORLD: 'WORLD',
  };
};


var constants$2 = Object.freeze({
	default: constants$1
});

var constantsFactory = ( constants$2 && constants$1 ) || constants$2;

var constanst = constantsFactory();

console.log(constants.HELLO + ' ' + constants.WORLD);

var cjs_input = {

};

return cjs_input;

}());
