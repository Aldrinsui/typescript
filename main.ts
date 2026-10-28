
const s: string = require('fs').readFileSync(0, 'utf-8').trim();

const space = s.indexOf(" ");

const firstname = s.slice(0, space).toLowerCase();
const lastname = s.slice(space + 1).toLowerCase();

const firsttitle = firstname.charAt(0).toUpperCase() + firstname.slice(1);
const lasttitle = lastname.charAt(0).toUpperCase() + lastname.slice(1);

const fullname = (`${firsttitle} ${lasttitle}`);

const intials = firstname.charAt(0).toUpperCase() + "." + lastname.charAt(0).toUpperCase() + ".";

const username = firstname.charAt(0) + lastname


console.log(fullname)
console.log(intials)
console.log(username)