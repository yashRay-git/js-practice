
function shopCardAdd(...num){  
    /// ... its called rest opratore 
    return num ;             
}
console.log(shopCardAdd(100,200,54,3000));


// how to pass objto function 

let user ={
    name:"yash",
    age:21
}


function handobj(anyobj){
   console.log(`name is ${anyobj.name} and age is ${anyobj.age}`);
}
//handobj(user);
// u can directly pass the object

handobj({
 
     name:"thisdummy",
     age:54

})
