// simple pass a function

// var a = 2;
// var b = function() { 
//     console.log("something"); 
// };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

// Call back function!!!

// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //we can invoke the callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//     console.log('end doSomething function here....')
//     console.log('')
//   }
//   doSomething(function myCallback(){ 
//       console.log('yes, I am a callback!') 
//     });
//   doSomething('string');
  
// function makePasta(pasta, makeSauce) {
//     comment: console.log(makeSauce); this is an added line to show the function being passed in
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     comment: create a variable for sauce!
//     var sauce = makeSauce();          comment: invoke makeSauce, our callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
//   }
//   function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
//   }
//   function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "alfredo";
//   }
//   comment: we pass the whole makePesto recipe to makePasta!
//   console.log(makePasta("Penne", makePesto));
//   console.log('');
//   comment: notice lack of parentheses after makePesto.
//   comment: Remember: we want to pass the function, not execute it and pass a return value.
//   console.log(makePasta("Farfalle", makeAlfredo));
//   console.log('');



// KIM setTimeout function

console.log("Want to see something cool....");
var ninja = 'Kim';
setTimeout(function myCallbackFunction(){
    console.log('0');
    ninja = "                  Love you babe";
    console.log(ninja, "<3");
    console.log('');
}, 11000
);
setTimeout(function myCallbackFunction(){
    console.log("1"); }, 10000
  );
  setTimeout(function myCallbackFunction(){
    console.log("2"); }, 9000
  );
  setTimeout(function myCallbackFunction(){
    console.log("3"); }, 8000
  );
  setTimeout(function myCallbackFunction(){
    console.log("4"); }, 7000
  );
  setTimeout(function myCallbackFunction(){
    console.log("5"); }, 6000
  );
  setTimeout(function myCallbackFunction(){
    console.log("6"); }, 5000
  );
  setTimeout(function myCallbackFunction(){
    console.log("7"); }, 4000
  );
  setTimeout(function myCallbackFunction(){
    console.log("8"); }, 3000
  );
  setTimeout(function myCallbackFunction(){
    console.log("9"); }, 2000
  );
  setTimeout(function myCallbackFunction(){
    console.log("10"); }, 1000
  );

console.log(ninja, "watch this....");


