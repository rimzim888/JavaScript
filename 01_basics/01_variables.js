const accountId = 144553
let accountEmail = "rim@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed bc its const


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

Scope = where a variable can be used. {}
 
Why var is bad: it doesn’t respect { }, so variables leak and you can change them by mistake.

Why let is better: it stays inside its own { }, so nothing leaks.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 