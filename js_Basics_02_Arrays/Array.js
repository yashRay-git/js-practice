const myarr =[0,1,2,3,4,5];
const name = ["shaktiman","shamrug"];
console.log(myarr);

const myarr2 = new Array(1,2,34,5);
//console.log(myarr2[2]);

// array methods 

myarr.push(6);//added valuee in arryas
myarr.pop();//remove last value 
myarr.unshift(41); // shift the arryas and put in 1st element ;
myarr.shift(); // remove the value added by  the unshift
console.log(myarr);


console.log(myarr.includes(0)); //check the arryas has value or not 
console.log(myarr.indexOf(2)); //gives the value at index

const cars = myarr.join(); // joins the myarr to the new arry and change the types to string 


console.log(myarr);
console.log(typeof cars,cars);

console.log("------slice and splice--------");

console.log("a " ,myarr);
const mynt = myarr.slice(1,3) // IT WILL NOT MMANIPULATE ORG ARRYS 
// it will take 1 to 3 but 3 is not include 
console.log(mynt,myarr);

console.log("b ", myarr);
const mynt1 = myarr.splice(1,3); // MOST IMP IT WILL MANIPULATE THE ORG ARRYAS 
// it will take and include BOTH INDEX
console.log(mynt1, myarr);


// check arrys is an empty or not
 
const arr = [];
if (arr.length === 0) {
    console.log("this arrys is emty ");
  
}