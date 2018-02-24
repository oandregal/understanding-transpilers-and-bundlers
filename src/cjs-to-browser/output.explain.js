(function() {
  // MODULE CommonJS API
  var module = {};

  // REQUIRE CommonJS API
  var modules = {};
  var require = function(moduleId) {
    var tmpModule = {};
    modules[moduleId](tmpModule, require);
    return tmpModule.exports;
  };

  // Prepare the modules

  // - 1st module
  var inputModule = function(module, require) {
    var constants = require('./constants');

    console.log(constants.HELLO + ' ' + constants.WORLD);
  };
  modules['./input'] = inputModule;

  // - 2nd module
  var constantsModule = function(module, require) {
    module.exports = {
      HELLO: 'HELLO',
      WORLD: 'WORLD',
    };
  };
  modules['./constants'] = constantsModule;

  // Execute the entry point
  modules['./input'](module, require);
})();
