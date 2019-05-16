const acorn = require("acorn");
const jsx = require("acorn-jsx");

const testParser = acorn.Parser.extend(jsx());

const result = testParser.parse('<><p>Text</p><p>More</p></>');
console.log( JSON.stringify(result) );
