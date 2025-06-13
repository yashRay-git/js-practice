// Arrays ,objects ,function  
// all the non primitive typeshave datatype "OBJECT"
const cars =["ertiga","crista","swift"];
console.log(cars);

//objects

let myObj={

name:"yash",
age:22,
tech:null,

}
console.log(myObj);

// functions
// func can be stored n variable  syntax: function(){};


const funcvariable = function(){
console.log("hellow from js ");

}

console.log(typeof cars);
console.log(typeof myObj);
console.log(typeof funcvariable); // DType = function its objectFunction 



function greet(name){
    return "Hello " + name;
}
console.log(greet("Yash"));

/*-------------------------------------------------------------------
  types of memory in js 
  stack (primitive) , Heap (Non-primitive)
  stack used copy of memory values but heap gives refrence of org values





*/
let name ="yash";
let lastname =name;
lastname="raypure";

console.log(name);
console.log(lastname);
// in stack we get the copy so that org valuy is not chnage 



let userOne= {
    email:"yash@gmail.com",
    upi : "user@123"
}

let user2 = userOne;

user2.email="raypure@gmail.com";

console.log(userOne);
console.log(user2);
// in non primiticve i.e heap we get the same refrences