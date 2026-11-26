//array - object, resizable

// Shallow Copy: Creates a new object, but nested objects retain shared references with the original.
// Deep Copy: Creates an independent copy of the object, including all nested objects.

const myArr = [9 , 1 , 2, 3, 4, 5, true , "rimjhim"] //JavaScript arrays are heterogeneous, meaning they can contain elements of different data types. C++ normal arrays are homogeneous, meaning all elements must have the same data type

const myHeroes = ["srk", "sallu", "rk"]

const myArr2 = new Array(0,1,2,3)

//console.log(myArr[0]); // zero based indexing


// array methods

myArr.push(11)
myArr.push(67)
myArr.pop() // removes last element

//myArr.unshift(4) // 4 at start now //Adds one or more elements at the beginning of an array.
//myArr.shift() //Removes the first element from an array.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);



// slice, spice

//slice() → Starting index included, ending index excluded; original array unchanged.
//splice() → Starting and ending index included, removes the specified number of elements; original array modified.

console.log("A", myArr);
const myn1 = myArr.slice(1,3) // 3 not inc only 1 and 2
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // prints 1, 2 and 3
console.log("C ", myArr);
console.log(myn2);





