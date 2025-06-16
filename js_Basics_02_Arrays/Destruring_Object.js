const course ={
    coursName:"IIB",
    price:"999",
    Time:"22 hr",
    Instructore:"ritesh"

} 
// destrucring is the method or good practice and how to make it easy  

/*here instate of qriting whole syntx like 
cnsole.log(course.coursName) which is headcek we simpley write this
*/
const {coursName} = course;
console.log(coursName);

// if we want to give the alternate name to the propertyes in obj we can 

const {Instructore:inst} = course;
console.log(inst);

//like this we can destructured it 