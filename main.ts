
const lines: string = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split("\n");


const n: number = Number(lines[0]);

let peak: number = n;
let current: number = n;
let steps: number = 0;


while (current !== 1) {
    if (current % 2 === 0) {
        current = current / 2;
    } else {
        current = current * 3 + 1;
    }
    steps++;
    peak = Math.max(peak, current);
}

console.log(`steps: ${steps}`)
console.log(`peak: ${peak}`)