
const inputname: string = require('fs').readFileSync(0, 'utf-8').trim();

const value: unknown = JSON.parse(inputname);

console.log(typeof value)
console.log(value === null)
console.log(Array.isArray(value))
console.log(typeof value === "string" && value.length)