// Input 0
var module$src$export_default = {}, constants$$module$src$export_default = {BAR:1, FOO:2}, $jscompDefaultExport$$module$src$export_default = constants$$module$src$export_default;
module$src$export_default.default = $jscompDefaultExport$$module$src$export_default;
// Input 1
var module$src$export = {}, constants$$module$src$export = {BAR:1, FOO:2}, foobar$$module$src$export = 3, $jscompDefaultExport$$module$src$export = constants$$module$src$export;
module$src$export.foobar = foobar$$module$src$export;
module$src$export.default = $jscompDefaultExport$$module$src$export;
// Input 2
console.log('BAR is ', module$src$export_default.default.BAR);
console.log('FOO is ', module$src$export_default.default.FOO);
console.log('FOOBAR is ', module$src$export.foobar);

