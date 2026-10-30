
const lines: string = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split("\n");

const year: number = Number(lines[0]);
const month: number = Number(lines[1]);

if (month === 2) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
        console.log(29);
    } else {
        console.log(28)
    }
} else if (
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11
) {
    console.log(30);
} else {
    console.log(31);
}