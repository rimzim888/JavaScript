/*An object is a collection of key-value pairs used to store related data. 
There are two commonly taught ways to create objects:
1. Object Literals - An object literal is a way of creating an object using curly braces {} directly.

const user = {
    name: "Rimjhim",
    age: 18
};

console.log(user);

2. Object Constructors - An object constructor is a way of creating objects using a constructor or a built-in object-creation method.

const user = new Object();

user.name = "Rimjhim";
user.age = 18;

console.log(user);

o/p - { name: 'Rimjhim', age: 18 }

// singleton - when made through constructor, object is singleton;  means:
- Only one instance of a particular object is created.
- The same instance is reused whenever needed.
- You don't create multiple independent instances of that object.

*/
const mySym = Symbol("key1")

Object.create // constructor method

const JsUser = {
    name: "rimjhim",// key: value  
    "full name": "rimjhim rawal",
    [mySym]: "key1", // to refer a symbol use [] else its a string
    age: 18,
    location: "Indore",
    email: "rimrawal@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // when passed through dot, not required to access like a string 
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof mySym); //  symbol
console.log(JsUser[mySym]); 

JsUser.email = "rimjhim@gmail.com"
//Object.freeze(JsUser) // to lock vals; cant be changed
JsUser.email = "rimjhim@goat.com" // not propagated bec freezed before
console.log(JsUser);

JsUser.greeting = function(){   // When a function is stored inside an object, we call it a method. A function is a block of code that performs a particular task when we call it.
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // for referencing the same object - use "this" ; all the properties in the object will be here
}

console.log(JsUser.greeting()); // undefined because it prints but function doesnt return anything 
console.log(JsUser.greetingTwo());