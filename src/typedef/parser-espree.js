/**
 * Dependencies.
 */
const espree = require('espree');
const { readFileSync } = require("fs");

const filePath = process.argv[2];
const code = readFileSync(filePath).toString();

const result = espree.parse(code, {
	comment: true,
	ecmaVersion: 2020,
	sourceType: 'module'
});

console.log(result.comments);
