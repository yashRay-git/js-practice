let score = "";
console.log(typeof score);

let val = Number(score);
console.log( typeof val);
console.log( val);

console.log('---------------------------BOOLEAN---------------------------------------');

/*

if we want any string value ex: '123' to be converted in to the number we can used Number function .
"124" => 124 
"124a" => Nan (its type is number but value is nOT A NUMBER)
true =>  1 or false  => 0
null => 0
"" => 0 

 */

 let  bol = false;
 console.log(typeof bol);

 let conbol = Boolean(bol);
 console.log(typeof conbol);
 console.log(conbol);
 
 
 /* 
  1 => TRUE OR 0 => FALSE
  "ASD" =>  TRUE OR "124" => TRUE
  "" => FALSE 
  NULL => FALSE 
  ------------------------------------string------------------------------
 */

console.log( '------------------------------------string------------------------------');
let  num = 0;

console.log(typeof num);

let strnum = String(num);
console.log(typeof strnum);
console.log(strnum);

/*
string will convber any number  to string number 
123 => "123"
null => "null"

*/