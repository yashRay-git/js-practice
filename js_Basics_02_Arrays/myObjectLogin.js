const logIn = {
    name:"yash",
    lastName : "raypure",
    mail:"yashraypure@gmail.com",
    passwod:"123@yash",
    age:22,
};

logIn.info = function(){
    console.log(`This is user profile info
      NAME: ${this.name},
      lastName: ${this.lastName}, 
      MAIL: ${this.mail}, 
      PASS: ${this.passwod}, 
      AGE: ${this.age}`);
}

logIn.info();

logIn.ChanagePass= function(newpass){
     this.passwod = newpass;
    console.log(" ✅ passWord is updated ");
    console.log(`change password is: ${this.passwod}`);
};
logIn.ChanagePass("1@3");

