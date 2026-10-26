
const inputname: string = require('fs').readFileSync(0, 'utf-8').trim();

console.log("Hello, " + inputname + "!");
console.log("Length: " + inputname.length);
