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
return v3;
}
addtownombers(564,20); //arguments

