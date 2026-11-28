 const tinderUser = new Object()
// const tinderUser = {} // both are same creates empty object {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(tinderUser.name);// sammy 

const regularUser = {
    email: "rim@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rimjhim",
            lastname: "rawal"
        }
    }
}

 // console.log(regularUser.fullname.userfullname.firstname); // ?. is also used to check if that val is existing or not

 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
 /* Object.assign() is used to copy properties from one or more objects into another object.
 {} → The empty object where we want to put all the properties.
obj1 → Copy its properties into the empty object.
obj2 → Copy its properties into the same object.
obj4 → Copy its properties into the same object.
*/
//const obj3 = {...obj1, ...obj2} // spread syntax.
// console.log(obj3);


 // when vals come from database; comes in arrays []
 const users = [ 
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "jr@gmail.com"
    },
]

users[1].email
console.log(Object.keys(users)); // Indexes of the users array
//console.log(Object.keys(users[0])); // ['id', 'email']
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object.keys() doesn't care whether you manually created an array or not. Its job is to take an object (or array) and return its keys in an array automatically.


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "rim the goat"
}

 course.courseInstructor

 const {courseInstructor: instructor} = course

//console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]