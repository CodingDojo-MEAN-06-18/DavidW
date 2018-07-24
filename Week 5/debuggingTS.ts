// 1. 

var myString: string|number;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;

// set optional types.... 
// myString: string | number

// 2.

function sayHello(name: string | number){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));
 
//  paramater passed in is a number and its expecting a string so you have to have it accept both types
// sayHello(name: string | number)

// 3.

function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));

//  make the field optional...
//  middleName?

// 4.

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

//  const jay seems to have a typo
// belt should be belts...

// 5.

class Ninja {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    constructor(fullName?: string, firstName?: string, lastName?: string){
          this.fullName = `${this.firstName} ${this.lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja();
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

//  need to add new in front of Ninja
// needed to restructure the Ninja class and Constructor
// restructure study function

// 6.

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => (x * x);
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => { 
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}

// added parenthesis instead of the brackets... {x * x} -> (x * y)
// added parenthesis around the variables (x,y)
// added brackets to encapsulate the function 

// 7.

class Elephant {
    public age: number;
    constructor(age){  
        this.age = age;
    }
    birthday = function(){
       return ++this.age;
    }

 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
//  added the variable outside of the contructor and required an age to pass in to attach to the object
// then incremented before the variable and returned it



 
 
 