/**
 * Dependencies.
 */
const ts = require("typescript");
const { readFileSync } = require("fs");

const filePath = process.argv[2];
const code = readFileSync(filePath).toString();

const options = {
  allowJs: true,
};
const host = ts.createCompilerHost(options, true);
const internalSourceFile = ts.createSourceFile(
  filePath,
  code,
  options.target,
  true
);

host.getSourceFile = () => internalSourceFile;
host.readFile = () => code;

const program = ts.createProgram([filePath], options, host);

const sourceFile = program.getSourceFile(filePath);

// Without the line below, sourceFile.fileName is set to
// node_modules/typescript/lib/lib.d.ts
sourceFile.fileName = filePath;

sourceFile.statements.forEach((statement) => {
  console.log("\nnew statement");
  console.log(statement.jsDoc);

  console.log( 'Note how the typedef is attached as a JSDoc comment to the first function node');
});
