/* 
whener we used filter to return the values that is not possible in for-each loop;

in filter we will have call back func which we have access each values adter that we have condition .if condition truwe then its values return .
--------------------------------------------------------------------
.map() transforms every item (but keeps all of them).

.filter() returns only items that match a condition.

*/ 

const mynum =[1,2,3,4,45,6,7,8,9,10,11]

const variable= mynum.filter( (item) => item > 4)

 console.log(variable);
    
// if ur using {} scope curly braces then u must used the return statement in filter scope .


const var2 =  mynum.filter( (myvar) => {
    return myvar>6
} )   
console.log(var2);

//-------------------------------------------------


const books = [
    { 
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
     },
    {
         title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 
    },
    { 
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },
    {
         title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
     },
    { 
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014
    },
    {
         title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 
    },
    { 
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 
    },
    { 
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 
    },
    { 
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
     },
  ];

  const result = books.filter( (bk) => bk.publish === 1989 && bk.edition >= 2010)

  console.log(result);
  

  const newresult = books.filter( (bks) => {
    return  bks.publish > 2001;
  } )
  console.log(newresult);


  const newvariable = books.filter( (bks) => bks.title === "Book One"   )
  console.log(newvariable);


const titless = books.filter ( (bks) =>
     {
  return  bks.publish >= 1989
 });


// here using the for each loop i hvae segrated the title and publish from filtter 

titless.forEach( (item) => {
     console.log(item.title +" "+ item.publish);
});

console.log(`--------------------------------------`);


titless.filter((bok) => {
return bok.edition >2000
});

titless.forEach(element => {
    console.log(`${element.title} there eidition is  ${element.edition}` ); 
});
//MAP 
// here we r now learnin map 
/* it return the valuess automaticallly 


*/
 const arr2 =[1,2,44,3,4,5,6,78,9,10];
 
const ar = arr2.map(( num) =>  num + 9 )

console.log((ar));
 
// chainig the  Function 
const man = arr2

     .map(( ap ) =>  ap + 9 ) // value become  EVERY ITEM CHANGE AND KEEPS IT ALL 
     .filter( (item) => item > 19 ) // vlaue comes with  + 9 and give greter than 19 number CONDITION TEST ONLY 

console.log((man));


/*
      Reduced 

Accumulator: Stores the result so far.

currentValue: The current item in the array.

initialValue: (optional) The starting value of the accumulator. 

*/

const total = arr2.reduce( function(acc,curval) {

console.log(`the accumilatore ${acc} and current value  ${curval}`)

    return acc + curval; // this return value goes to become accoumilator vlaue 
 
} , 0 /* with ,intial value of accumulatore */ )


console.log(total);

// this is arrow function noptation with {}scopes sop we will not type returm function 

const arrow = arr2.reduce( (acc1, cur1) => acc1 + cur1,  0 )
console.log(arrow);

// reduces function for the arry list and object arry-list on specific items 



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


let sumtotal = shoppingCart.reduce(function(acce ,item ){
    console.log( `price of the book is ${item.price}`)
   return  acce + item.price
   }, 0 )
console.log(` sum total of the books is-- ${sumtotal}`);

/* 

🧠 Best Use Summary for Array of Objects:
Purpose	Method	Example Use Case
Modify each item	.map()	Add a new field to every object
Filter based on condition	.filter()	Get only users older than 18
Summarize to one value	.reduce()	Total prices, count names, group by field

🎯 Final Tips:
Use .map() when: ✅ You want a new array of the same length but with changes.

Use .filter() when: ✅ You want a shorter array based on conditions.

Use .reduce() when: ✅ You want one final value (sum, count, object).

*/