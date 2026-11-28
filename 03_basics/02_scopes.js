//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
   //  console.log("INNER: ", a);
    
}
 console.log(a);
// console.log(b);
// console.log(c);

// a scope is diff for when you open it on inspect on google and in node environment



function one(){
    const username = "rim"

    function two(){
        const website = "yt"
        console.log(username); //An inner function can access variables declared in its outer function. This is called lexical scope.
    }
   //  console.log(website);

     two()
     }
one()

one.username = "sam"; // after this not undef
console.log(one.username); // undef // username is a local variable, NOT a property attached to one.


if (true) {
    const username = "rim"
    if (username === "rim") {
        const website = " youtube"
         console.log(username + website);
    }
   //  console.log(website);
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
//JavaScript allows a function declaration to be called before its definition. This behaviour is called hoisting.

// addTwo(5) // JavaScript has to execute this declaration and initialize the variable before you can use it.addTwo is declared using const, it cannot be accessed before initialization. This results in a ReferenceError (the Temporal Dead Zone).
const addTwo = function(num){ // a var is holding a function
    return num + 2 
}

