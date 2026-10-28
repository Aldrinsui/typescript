
const text: string = require('fs').readFileSync(0, 'utf-8').trim();

const minutes = Number(text)

const days = Math.floor(minutes / 1440);

const remaindingminutes = minutes % 1440;

const hours = Math.floor(remaindingminutes / 60)
const mins = remaindingminutes % 60

console.log(`${days} d ${hours} h ${mins} min`);
