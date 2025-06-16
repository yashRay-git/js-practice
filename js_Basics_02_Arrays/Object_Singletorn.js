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
const obj3 = Object.assign({},obj1,obj2); //obeject.assign is an methods 
console.log(obj3);
