//const user = new Object ()
const user ={};
user.id  ='a123';
user.lastname ="raypure";

// console.log(user);

const CRM ={
    email:"crm@gmail.com",
    fullname :{
        UserfullName: {
            firstName:"yash",
        }
    }
}
console.log(CRM.fullname.UserfullName.firstName);
//merging of the object

const obj1 ={
    1:"a",
    2:"b",
}
const obj2 ={
    3:"c",
    4:"d",
}
const obj3 = Object.assign({}, obj1, obj2); //obeject.assign is an methods which merge the objects 
console.log(obj3);
// USING SPRADE SYNTAX AS ARRYAS

const obj4 ={...obj1,...obj2}; 
console.log(obj4);

const  arrObj =[
    { 
        id:1,
        email:"yash@gmail.com"
    },
     { 
        id:1,
        email:"yash@ail.com"
    },
     { 
        id:1,
        email:"ya@gmail.com"
    }, { 
        id:1,
        email:"yasmail.com"
    }
]
console.log(arrObj[2].email);

// object.keys(objname ) if u want to grup the keys in arryas then u can 

console.log(Object.keys(user));
console.log(Object.values(user));  //gives values 
console.log(Object.entries(user)); // [ [ 'id', 'a123' ], [ 'lastname', 'raypure' ] ]

// check wheter their is specific property or not in object 
console.log(user.hasOwnProperty('lastname'));
