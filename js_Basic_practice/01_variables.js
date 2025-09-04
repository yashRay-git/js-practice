console.log('this is yash from js ');
const accountId = 144553 // cant chaneg the value its constant
let accountEmail = "yash@gmail.com" 
var accountPassword = "12345" // dont used this bez of functional and block scope 
accountCity = "Jaipur"  // undefined values assigned 
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com" // can change 
accountPassword = "21212121" // can change 
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//-------symbols used for uniqness in js 

const id = Symbol('123');
const newid = Symbol('123');

console.log(id === newid,"symbol make uniqness");


let age =12;

// String concatenation
console.log("Tommy is "+ age + " years old.");

// String interpolation
console.log(`Tommy is ${age} years old.`);