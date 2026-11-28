// Immediately Invoked Function Expressions (IIFE)
// It is a function that executes immediately after it is created. You don't need to call it separately.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// global scope pollution creates problem, to remove those decalataions and everything we use iife

// when writing two iife ; is must
( (name) => { // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('rim')

/*(name) → Parameter.
('rim') → Argument passed to the function.
Arrow function → Function without a name. */