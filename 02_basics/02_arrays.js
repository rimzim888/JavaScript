const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel_heroes.push(dc) // took whole dc array as also a data // pushes on existing array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc) // concat returns a new array. Combines the elements of both arrays into one new array.
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc] // spread ...
// console.log(all_new_heroes);

const anotherArr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);


console.log(Array.isArray("rimjhim")) //whether a given value is an array or not.
console.log(Array.from("rimjhim")) // string is iterable, so its characters are converted into array elements. Converts an iterable or array-like value into a new array.
console.log(Array.from({name: "rimjhim"})) // empty array [] ; {name: "rimjhim"} is neither iterable nor array-like (it has no length property), so it returns an empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Creates a new array from the given arguments.


