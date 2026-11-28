const user = {
    username: "rim",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this is used to refer to current context
    //   console.log(this); 
    }

}

//   user.welcomeMessage() // () is used for method
//   user.username = "sam"
//  user.welcomeMessage()

// console.log(this); // {} 
// This this is NOT inside the user object or its method. When you run a normal JavaScript file using Node.js, the top-level this refers to the module's exports object, which is initially empty.



//  function chai(){
//      let username = "rim"
//      console.log(this.username); // undef // this.username and the local variable username are two different things

//  }
//  chai()

// const chai = function () {
//     let username = "rim"
//     console.log(this.username);
// }
//  chai()

/* norma fun - this refers to the calling context, not the function's local variables.

Since username is a local variable and not a property of this, it gives undefined (in your Node.js example).


Arrow functions do not have their own this.
They inherit this from their surrounding (outer) scope.
Therefore, this.username does not refer to the local variable username here either.

Remember: this is used to access properties of an object, not local variables declared inside a function.

*/

// arrow func : () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return (to assume) return is necessary if {} is used

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // object return


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()