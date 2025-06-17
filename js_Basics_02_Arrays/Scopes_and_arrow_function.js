// var // has global scope in js 
// let and const // has scope in block code parenteses scope

/*

if else {} accesseble only up the parenthesis acope 
nested fuctionsame cant access the child fuction varibale 
we can only access the parents variables in childs fuction 

*/ 

// browser has global variable 'windows'


// used of the this key and its declaration 

let user ={
    name:"yash",
    age:123,
    id:"@12",


    welcome: function(){
        console.log(`welcome ${this.name}`);
         //only can be declred in object
        console.log(this);
        
    }
}
// "this" cant declared in fuynctions 
user.welcome();
user.name ="sameer"; //corrent cotext change i.e name bez we have put this whcih tells us abt corrent context
user.welcome();  
console.log('--------------------this is arrow func-------------------------------');
 
// diffrence of the "this" in simple nad arrow  function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// we cant used "this" key in both of them .



// arrow function syntax 
() => { }

// we can hold the  arrow function in varibale s
//explicit return 
let add = (num) => {
    return num +1;

}
console.log(add(1));

// implicit return ky word

let mul = (num1,num2) => num1*num2;
console.log("multiplication by arrow "+mul(12,45));

// object passesd using arrow
// using {} for the object and then covering it in to ()

let div = (num1,num2) => ( {user: "yash"} );
console.log("object in arrow by arrow "+div(12,45));