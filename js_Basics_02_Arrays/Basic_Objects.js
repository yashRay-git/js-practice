// singleton => made  by constructore only 
// Object.create
//object literals =>

    const myObje ={
 // keys:values in objects 
    name:"yash",
    "last Name":"raypure",
    age :21, 
    mail:"yash@gmail.com",
    lastLogin:["mon","sat"]
};

//tow ways to acces the mail 

console.log(myObje["mail"]);
console.log(myObje["last Name"]);  // if we declaed with spaces then we cant do it by object.variable
console.log(myObje.age);


 const fullname = Symbol("key1"); //ols as Object Keys
// In most cases, we use a symbol as a property of an object.
//  This way, the symbol doesn’t clash with other kinds of keys:

const myObj1 = {
    [fullname]:"yash raypure", // [fullname]: "yash raypure",  // here we have refence the symbol in object 

}
console.log(myObj1[fullname]); // here we have decleared tghe symbolin object 
console.log(myObj1);


myObje.mail = "hcatgpt.com";
// Object.freeze(myObje) // freez will lock the variable values
myObje.mail ="yashraipure@gmail.com";// this is not done bez of freeze function

console.log(myObje);

// we can add the function in objects 

myObje.print = function(){
    console.log("hii this is customixze chatBot ");
}
console.log(myObje.print());  

// here we are acceing the names and other keys of the object by interpolation

myObje.userwelcome = function(){
    console.log(`hii user, ${this.name}`); // for interpolation used backtics ` present before one in kaybord
    console.log(`YOUR LAST LOGin at ==> ${this.lastLogin}`);
     
}
console.log(myObje.userwelcome());  // we r gating undefined bez because `info()` doesn't return anything

// cjhrck obj is empty or not 

if (Object.keys(myObje).length === 0) {
    console.log('this obj is emty ');
    
}else{
    console.log("this isnot emty");
    
}