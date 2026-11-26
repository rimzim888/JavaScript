const score  = 400
//console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // keeps 2 digits after the decimal point //returns a string

// console.log(typeof balance.toFixed(2)); // string

const otherNumber = 1123.8966 //1.12e+3  means 1.12 * 10^3 = 1120
// console.log(otherNumber.toPrecision(3)); // returns a string

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // put commas in the big vals in 3,2,2 (indian way)

// +++++++++++++ maths ++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // neg vals in pos // absolute
// console.log(Math.ceil(4.3)); // 5 // upper val
// console.log(Math.floor(4.3)); // 4 // lower val
// console.log(Math.min(4,3,6,7));
// console.log(Math.max(4,3,6,7));

// // console.log(Math.random()); // always bw 0 and 1
//  console.log((Math.random()*10) + 1); // in case val is 0.01.. and we want it bw certain nums so add +1 for that case to avoid 0 in this case
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
 
console.log(Math.floor(Math.random() * (max - min + 1) )+ min) // + min for min val this much is needed 




