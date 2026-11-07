//Dynamically Typed Language - You don't need to declare the data type. JavaScript automatically determines it based on the value.


//  Primitive - Primitive means basic, single values. Copy gets an independent value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //Even Symbols with the same description are never equal to each other.

//const bigNumber = 3456543576654356754n // n rep bigInt



// Reference (Non primitive) - These are used to store collections or more complex data. Copy gets the same object reference

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] // array

let myObj = {

    name: "rimjhim",
    age: 22,
 
}

const myFunction = function () {
    console.log("hello world");
    
}

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // obj 
console.log(typeof myFunction); // obj function
console.log(typeof id); // symbol
