// Concatenation simply means joining two or more strings together using +.

const name = "rimjhim" //Primitive string.
const repoCount = 5
// console.log("Hello " + name + " and my repo count is " + repoCount);
// console.log(name + repoCount + " Value"); //older way of joining strings using +



console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation using Template Literals


 
const gameName = new String('rimzim-mmm-com') 
//explicitly creating a String object using the String constructor
// string is a built in js constructor(blueprint or machine that creates objects)
 //String object (non-primitive).

console.log(gameName[0]);


//Think of an object as a container that stores related information in the form of key-value pairs ex age = 22

console.log(gameName.__proto__); // object 
//  //prototype is an object from which another object can inherit properties and methods.
//JavaScript temporarily wraps the primitive string in a String object when you access its properties or methods. This process is called autoboxing

console.log(gameName.length); // .length is a property, not a method thats why not ()

// strings are immutable in JavaScript. Immutable means once a string is created, its contents cannot be modified.

console.log(gameName.toUpperCase()); //built-in JavaScript string method

console.log(gameName.charAt(4));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4) // 4 char got shown, last 4 not inc
console.log(newString);


const anotherString = gameName.slice(-8, 4) // can take neg vals //slice(start, end)
console.log(anotherString);
/*
Negative indexes count from the end of the string.
  Our string 'rimzim-mmm' has 10 characters.
 -8 means 10 - 8 = 2 (index 2).
  4 is the ending index, which is excluded.
 Therefore, indexes 2 and 3 are selected.
 substring doesnt take neg vals
 */ 

 const newStringOne = "    rimjhim    "
 console.log(newStringOne);
 console.log(newStringOne.trim()); // removes starting and ending extra spaces
 

 const url = "https://rimjhim.com/rimjhim%20rawal"
 console.log(url.replace('%20', '-'));
 
console.log( url.includes('roar'));

console.log(gameName.split('-'));


