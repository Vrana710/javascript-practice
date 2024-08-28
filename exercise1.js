var readline = require('readline-sync');

// Asking the user for their name, age, and favorite hobby
let name = readline.question("What's your name? ");
let age = readline.question("How old are you? ");
let hobby = readline.question("What's your favorite hobby? ");

// Printing out a personalized message
console.log(`Hello, ${name}! You are ${age} years old and your favorite hobby is ${hobby}.`);
