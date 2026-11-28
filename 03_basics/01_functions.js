function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("M");
    console.log("J");
    console.log("H");
    console.log("I");
    console.log("M");
}

// sayMyName() // () is for execution without this its just a reference

//  function addTwoNumbers(number1, number2){ // doesnt need to give type of num in js // num1 and num2 are parameteres
//     console.log(number1 + number2);

//  }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    //  return result
    //  console.log("rimjhim"); // nothing gets printed after return
     
    return number1 + number2
}

//  addTwoNumbers(3,4) // 3 and 4 are arguments when calling and parameters when defining the fuction  // 7
//  addTwoNumbers(3,"a") // 3a

const result = addTwoNumbers(3, 5)
// console.log(result); //undefined here simply means the function didn't give a value back.
// console.log("Result: ", result); // gives num ehen return is used


 function loginUserMessage(username = "sam"){
     if(!username){ // username is undefined with !
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rimjhim"))
console.log(loginUserMessage()) // defaut sam 



function calculateCartPrice(val1, val2, ...num1){ // rest or spread  operator, here rest // val 1 and 2 gets 200 and 400 rest gets into the array in o/p
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "rim",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));