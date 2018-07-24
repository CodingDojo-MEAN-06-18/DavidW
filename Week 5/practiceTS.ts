//      Functions and Classes

// Never type (will never reach the end of the function)
function errorHandler(message: string): never{
	throw new Error(message);
}
// Void (returns nothing) 
function printValue(val: string): void{
	console.log(val);
	return; //  <----- dont really need this 
}
// returns what you defined below vvvv and pass in num ass well 
function printaValue(val: number): number{
	console.log(val);
	return val; //  <------    ^^^^^^ returns whats definded above (string, boolean, number)
}

//JS actually doesnt have classes this is "syntatical sugar" as theye cal lit
//they are actually function constructors that include prototypes.
class SLNode {
	val: number; //defines the variable within the class 
	constructor(valueP: number){ //constructor class helps store the new class values you pass in 
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
let firstSLNode = new SLNode(1);



/*    IMPORT/EXPORT MODULES

Sample patterns:
import * from 'libraryName';  import all from x;
import { SpecificLibraryObject } from 'filepath/LibraryName';  import 1 from x;
import { objectA, objectB } from 'filepath/LibraryName';  import 2 from x;

Real examples:
import * from 'rxjs';
import observable from 'rxjs/observable'

Sample patterns:
import * from 'libraryName';  import all from x;
import { SpecificLibraryObject } from 'filepath/LibraryName';  import 1 from x;
import { objectA, objectB } from 'filepath/LibraryName';  import 2 from x;

Real examples:
import * from 'rxjs';
import observable from 'rxjs/observable'

*/

//      INTERFACES

// Not using an interface
function printName(user: { name: string }): void{
	console.log(user.name);
	return;
}

// Using an Interface
interface UserInterface {
	name: string
}
function printAName(user: UserInterface): void{
	console.log(user.name);
	return;
}

// Optionals- We can also make types as optional, meaning, the properties could exist on the object, 
// or not, and still be valid.
interface UserInterface {
	name: string
	cellNumber?: number;
}
function printTheName(user: UserInterface): void{
	console.log(user.name);
	if (user.cellNumber){ console.log(user.cellNumber) }
	return;
}

/*
Resources
    https://www.typescriptlang.org/docs/home.html
    https://github.com/Microsoft/TypeScript   
    https://github.com/Microsoft/tslib
*/