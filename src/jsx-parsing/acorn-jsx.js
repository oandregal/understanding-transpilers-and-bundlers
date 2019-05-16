const acorn = require("acorn");
const jsx = require("acorn-jsx");

const testParser = acorn.Parser.extend(jsx());

const result = testParser.parse('<howdy><p>Text</p><p>More</p></howdy>');
console.log( JSON.stringify(result) );
