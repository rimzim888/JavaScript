// stack (primitive) : You get a copy of the value. Changing one doesn't affect the other.

// heap(non primitive) : Variables hold references to objects. Changing an object through one reference can affect what you see through another.



let myYoutubeName = "rimzimdotcom"

let anothername = myYoutubeName //means a copy of the value is given to anothername
anothername = "lifeofrimzim" //When you change anothername, only its copied value changes.myYoutubeName remains unchanged.

console.log(myYoutubeName);
console.log(anothername);


let userOne = {
   email: "rim@google.com",
   upi: "rim@ybl"
}

let userTwo = userOne

userTwo.email = "jin@google.com"

console.log(userOne.email);
console.log(userTwo.email);

