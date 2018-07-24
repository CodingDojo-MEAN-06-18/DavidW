// 1
// console.log(hello);                                   
// var hello = 'world';                                 

// interpretated
var hello;
console.log(hello)
hello = 'world'

// output: 
// undefined
console.log("");

// 2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// interpretated
var needle;
test();
function test(){
    var needle;
    needle = 'magnet'
    console.log(needle)
}
needle = 'haystack'

// output:
// magnet

console.log("");
// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// interpretated
var brendan;
brendan = 'super cool'
function print(){
    brendan = 'only okay';
    console.log(brendan)
}
console.log(brendan);

// output 
// super cool
// children functions dont pass info into parents and the function is never called

console.log("");
// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// interpretated
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food)
eat();

// output
// half-chicken
// chicken

console.log("");
// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// interpretated 
// var mean;
// mean();
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);

// output:
// Typeerror : mean has not been established as a function when it is called as one 
// so it throws an error

console.log("");
// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// interpretated 
var genre;
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre)

// output:
// undefined
// rock
// r&b
// disco

console.log("");
// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo)

// interpretated
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"
console.log(dojo);
learn();
console.log(dojo);

// output:
// san jose
// seattle
// burbank
// san jose

console.log("");
// 8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// interpretated
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50){
//         dojo.hiring = true;
//     } else if (dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// output:
// { name: 'Chicago', students: 65, hiring: true }
// TypeError: const cant be changed
