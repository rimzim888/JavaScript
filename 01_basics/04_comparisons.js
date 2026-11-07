// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // datatype should be same
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Comparison operators (>, <, >=, <=) : They convert null into a number when comparing it with a number.
//Equality operator (==) : It follows different rules. It does NOT convert null into 0.ecause JavaScript has a special rule that null is loosely equal to undefined, not zero.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//JavaScript converts undefined to NaN during numeric comparisons.

// === 

console.log("2" === 2); // checks vals and their datatypes