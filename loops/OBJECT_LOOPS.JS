//object using for-in loop
const myobje = {
    js: "javascript",
    cpp: "c++",
    swift : "apple"
}
for (const key in myobje) {
    
     console.log(myobje[key]);
     
}

// using for-in  the backticks 

for (const key in myobje) {
    
     console.log(`${key} shortkut is for ${myobje[key]}`);
    
}

const arr =["n","i","o","p","m","k"];

for (const key in arr) { //forIn loop
    console.log(`this is index ${key} and it values ${arr[key]}`);
}

// for-each Loop forthe arryas
// syntax 
// call back fun doest have name so here no name 
// here he have access of arr index and items i.e values 

arr.forEach( function (item,index,arr) {
console.log(" this is for eachloop "+item);
if (item ==="i"){
    console.log(` alphabates i is prenst in the arrys at the index  ${index} and we have arrlist ${arr}`);
}
} )

// arroy function for-each  
// for-each loop return the undefined values its rowback  

arr.forEach((item) => {
    console.log(" this is for eachloop arroynotaion "+ item);
});
    

// arryas object  itteratores in js 
// important things 

const arrobject = [

    {
        id:123,
        name:"yash"
    },
    {    id:12,
        name:"adesh"
    },
    {    id:13,
        name:"jayesh"
    }
]

arrobject.forEach( (item)=> {
    console.log(item.id +" "+ item.name);
    
}
)
