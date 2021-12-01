// 1. Find sum of first 10 natural numbers
// for loop
let sum=0;
for(let i=1;i<11;i++){
    sum+=i;
}
console.log("Sum of first 10 NN: "+ sum);
sum=0;
// do while loop
let i=1;
do{
    sum+=i;
    i++;
}while(i<11)
console.log("Sum of first 10 NN: "+ sum);
// while loop
sum=0;
i=1;
while(i<11){
    sum+=i;
    i++;
}
console.log("Sum of first 10 NN: "+ sum);

// 2. Print fibbonaci series upto first 10 numbers.
// for loop
let f0=0;
let f1=1;
console.log("First 10 fibbonaci numbers:");
console.log(0);
console.log(1);
for(let i=2;i<10;i++){
    let f2=f0+f1;
    console.log(f2);
    f0=f1;
    f1=f2;
}

// do while loop
f0=0;
f1=1;
console.log("First 10 fibbonaci numbers:");
console.log(0);
console.log(1);
i=2;
do{
    let f2=f0+f1;
    console.log(f2);
    f0=f1;
    f1=f2;
    i++;
}while(i<10);

// while loop
f0=0;
f1=1;
console.log("First 10 fibbonaci numbers:");
console.log(0);
console.log(1);
i=2;
while(i<10){
    let f2=f0+f1;
    console.log(f2);
    f0=f1;
    f1=f2;
    i++;
}

// 3. Print all the keys and values of employee object used in first problem
const employeeDetails={
    name:"Mayank Modi",
    email:"abc@gmail.com",
    age:20,
    address:"Indore, Madhya Pradesh",
    phoneNumber:"1234567890",
    gender:"Male",
    isMarried:false
}
// for-in loop
for(let i in employeeDetails){
    console.log(`${i} : ${employeeDetails[i]}`);
}


