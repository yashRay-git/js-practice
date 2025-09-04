// syntax
function print(){
   
    console.log("this is function");
    
}//calling function 
print()

function addtownombers(v1,v2){ //parameters
// let v1 = 123;
// let v2 = 123;

if (typeof v1  == "number" && typeof v2 == "number") {
    
let v3 = v1+v2;
console.log(`addition of two no is ${v3}`);

}else{
    console.log(`NOT A NUMBER ${v1} ${v2}`);
    
}
}
 addtownombers(564,20); //arguments


 function mul(a ,b ){
    let c =a * b;
    return c;

 }
 const r = mul(2,5);
 console.log (`this is multipication ${r}`);

 function logInfo(usename){
    if (usename=== undefined) {
       console.log( `pleac enter user Name `);
       return ;
    } 
    return `Welcome to crm ${usename}`
 };

let result2=logInfo('yash');
console.log(result2);

let myobejt={
    name:"yash",
    age:45
}
//  // setting properti and assigned it as fuction value 

//  myobejt.getinfo = function(){
//     console.log(this.name, 
//         this.age
//     );
//  }
// myobejt.getinfo();

/*--------------- -------------------*/