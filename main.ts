
const lines: string = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split("\n");


interface person {
    readonly id: string;
    inputname: string;
    nickname?: string;
}

interface Employee extends person {
    team: string;
}

const employee: Employee = {
    id: lines[0],
    inputname: lines[1],
    team: lines[2],
    nickname: lines[3]
}

console.log(employee.nickname || employee.inputname);
console.log(`id ${employee.id}, team ${employee.team}`)