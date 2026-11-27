//This will allow us to use the greet function in other files
// that (greet.js) is in the same directory as this file (index.js)

const greet = require("./greet");
const { person1, person2, person3 } = require("./people");

greet("John");
console.log(person1);
console.log(person2);
console.log(person3);

greet(person1);
greet(person2);
greet(person3);
