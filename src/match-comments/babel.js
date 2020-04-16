/**
 * Dependencies.
 */
const babel = require('@babel/parser');
const { readFileSync } = require("fs");

const filePath = process.argv[2];
const code = readFileSync(filePath).toString();

const result = babel.parse(code, {sourceType: 'module'});

console.log('\n');
console.log(result.comments);

console.log('\n');
console.log(result.program.body);
