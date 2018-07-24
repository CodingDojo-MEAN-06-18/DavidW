// myNum = 5;
const myNum: number = 5;

// myString = "Hello Universe";
const myString: string = "Hello Universe";

// myArr = [1,2,3,4];
//          generic content/context                                         basic context
const myArr: Array<number> = [1,2,3,4];            // same as ----> const myArr: number[] = [1,2,3,4] 

// myObj = { name:'Bill'};
let myObj: { [key: string]: (string | number) } = { name: 'Bill' };

// anythingVariable = "Hey";
let anythingVariable: any = "Hey"

// anythingVariable = 25;
anythingVariable = 25;

// arrayOne = [true, false, true, true];
const arrayOne: boolean[]= [true, false, true, true]

// arrayTwo = [1, 'abc', true, 2];
const arrayTwo: (number | boolean| string)[]= [1, 'abc', true, 2]
    // other way:
    // type strNumBool = string | number| boolean;
    // const arrayTwo: strNumBool[]= [1, 'abc', true, 2]

// myObj = { x: 5, y: 10 };
const myObj2: object = {
    x:5,
    y:10
};

/*
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
*/

class MyNode {
    // DECLARATIONS OF VARIABLES
    val: number;
    _priv: number;

    constructor(value){
        // ASSIGNMENT OF VARIABLES
        this.val = 0;
        this.val = value;
    }
    
    doSomething(){
        this._priv = 10;

    }
}
const myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
	throw new Error("Error Message");
}