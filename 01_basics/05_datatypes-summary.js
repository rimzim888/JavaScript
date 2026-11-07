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

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) - These are used to store collections or more complex data. Copy gets the same object reference

// Array, Objects, Functions