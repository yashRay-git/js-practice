// NUMBER
//  this is object type defination of the variable 
let myNum = new Number(1221.363);
console.log(myNum);

console.log(myNum.toFixed(2)); //gives up to which u want the no
console.log(myNum.toPrecision(5)); // gives prisitin based on provided number 
//applyes the , to te number en-in used for the indian number 
console.log(myNum.toLocaleString('en-in'));

//----------MATHS-----------------
console.log('------------------maths function------------------');

console.log(Math.abs(-6));
console.log(Math.max(-6,4,6,7));
console.log(Math.min(-6,4,6,7));
console.log(Math.round(6.7));
console.log(Math.random()*10 + 1);
console.log(Math.round((Math.random()*10)) + 1);



