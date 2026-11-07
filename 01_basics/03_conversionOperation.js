let score = "rimjhim"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) //Number() is a built-in JavaScript function that converts a value into a number.
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "rimjhim"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 // console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "rimjhim" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// *********************** Operation ***********************

let value = 3
let negValue = -value
 //console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

/*

//String Concatenation and Type Coercion
 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + 2 + 2);
 
 //JavaScript evaluates this expression from left to right.
 //"1" + 2 gives "12" (string concatenation).
 //"12" + 2 gives "122" (again, concatenation).
 
 console.log(1 + 2 + "2");
 
console.log( (3 + 4) * 5 % 3);
*/

 console.log(+true); //1 Unary plus (+) converts Boolean values into numbers.
 console.log(+""); //Unary plus converts an empty string into a number. An empty string converts to 0.
 
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// prefix increment - the value is incremented FIRST, and then it is used.
/* let x = 5;

let y = ++x;

console.log(x); // 6
console.log(y); // 6 */

// Postfix increment (x++) - the original value is used FIRST, and then it is incremented.
/* let x = 5;

let y = x++;

console.log(x); // 6
console.log(y); // 5 */