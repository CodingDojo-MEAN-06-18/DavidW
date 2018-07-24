var http = require('http');
var fs = require('fs');
var my_module = require('./mathlib')();     //notice the extra invocation parentheses!
// console.log(my_module);

// math.add(2,3) should return 5)
console.log(my_module.add(2,3));

// multiply two numbers (e.g. math.multiply(3,5) should return 15)
console.log(my_module.multiply(3,5));

// square a number (e.g. math.square(5) should return 25)
console.log(my_module.square(5));

// return a random number between the two numbers 
// (e.g. math.random(1,35) should return a random number between 1 and 35)
console.log(my_module.random(1, 35));



