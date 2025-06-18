// for loops

let array=[1 ,2,3,4,5,6]
for (let index = 0; index < array.length; index++) {
   
    const element = array[index];
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = `outer loop ${i}` ;
    console.log(element);
    
    for (let J = 0; J < 10; J++) {
        console.log(`inner loop ${i} * ${J} `, i*J );
        
    }
}


// while loop  and do while loop

let i = 0
while ( i <= 10)  {
    console.log(i);
    i = i+1;   
}

let arrye =[1,2,3,4,5,6,7,89,0];

let arr=0;
while (arr<= arrye.length ) {
    console.log("this is arryas "+ arrye[arr]);
    arr=arr+1;
}

let score =12
do {
    console.log(`this is scored ${score}`);
    score++;
} while (score <=10);

