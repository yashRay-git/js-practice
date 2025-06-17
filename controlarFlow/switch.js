/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month =3;

switch (month) {
    case 1:
        console.log(`this is jan `);
        break;
    case 2:
        console.log(`this is feb `);
        break;
    case 3:
        console.log(`this is march `);
        break;
        
    case 4:
        console.log(`this is may `);
        break;

    default: 
    console.log('not a month ');
    
        break;
}

// false values /*
// 
//   false ,0 ,-0, bigint 0n,"",null , undefined , Nan
//
// */

// truthi /*
//    anthing in the  truthi value
// true ,1,
//  "0", 'false' , " "  [] , {} , function(){}
// 
// */
// nullish coalescing operator (??): null undefined
 /*

    if the datbase give null or 2 values then at that
    time we ca used the nullish coalescing operator 
  
if null comnes it will give another  values. we can assigne danother func

 */
let val;
val = null ?? 10;
val2 = undefined ?? 67
console.log(val , val2);

// terniary operatore 



