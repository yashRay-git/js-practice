// String  
// String concatenation
const age =22;
console.log("Tommy is "+ age + " years old.");

// String interpolation
console.log(`Tommy is ${age} years old.`);

const Carname = new String("inova");

console.log(Carname[3]);
console.log(Carname.length);
console.log(Carname.toUpperCase());
console.log(Carname); // cant chaneg as its stack memory( copy value) or primitive type

console.log(Carname.charAt(2)); // gives carector at position
console.log(Carname.indexOf('n')); // specify the index of charector
console.log(Carname.substring(2,5)) // create another string from index pos
console.log(Carname.slice(-4,2));// for the neagative values 
console.log(Carname.trim()); //remove spaces 
console.log(Carname.replace('o','ooo')); //replaces specific char
console.log(Carname.includes('in'));


//convert the string into the arryas 
const names ="yash-suresh-raypure";
const arr1 =(names.split('-'));
console.log(arr1);

// using split we can convert 
//  but with specific char lie '-' '.' ':'

