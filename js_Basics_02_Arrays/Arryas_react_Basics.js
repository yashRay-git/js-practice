const a = [1,2,3,4,5];
const b =[6,7,8,9,0];
// a.push(b);
console.log(a); // put arrays in arrays 

const allnumber = a.concat(b); // merge the arrys 
console.log(allnumber); // allnumber contain merging of the 2 number 

// sprade operatore

const spall = [...a,...b];
console.log( spall ); // one glass drop and sprade with ...

let multiDarr = [1,2,3,[4,5],6,[7,8,[9,0],11]];
let sordedarr = multiDarr.flat(Infinity);
console.log("sorded arrys " + sordedarr);

//convert any string into arryas 
console.log(Array.isArray("YASH"));
console.log(Array.from("this is yash "));
console.log(Array.from({name:"yash"}));



