// 1. Take two numbers and perform all the arithmetic 
// operations over them.
let a= 5;
let b= 6;

console.log(`
a+b= ${a+b}
a-b= ${a-b}
a*b= ${a*b}
a/b= ${a/b}
b^a= ${b**a}
b%a= ${b%a}
`);
a++;
b--;
console.log(`
a after increment= ${a}
b after decrement= ${b}
`);

// Output:
// a+b= 11
// a-b= -1
// a*b= 30
// a/b= 0.8333333333333334
// b^a= 7776
// b%a= 5
// a after increment= 6
// b after decrement= 5



// 2. Take 2 numbers and 2 strings and perform addition 
// operation on them in same sequence. 

let num1= 5;
let num2= 6;
let s1= "Mayank";
let s2= "Modi"

console.log(`
num1+num2= ${num1+num2}
s1+s2= ${s1+s2}
num1+s1= ${num1+s1}
num2+s2= ${num2+s2}
`);

// Output:
// num1+num2= 11
// s1+s2= MayankModi
// num1+s1= 5Mayank
// num2+s2= 6Modi

// 3. Take 2 Strings and 2 numbers and perform addition 
// operation on them in same sequence.

console.log(`
num1+num2= ${num1+num2}
s1+s2= ${s1+s2}
s1+num1= ${s1+num1}
s2+num2= ${s2+num2}
`);
// Output:
// num1+num2= 11
// s1+s2= MayankModi
// s1+num1= Mayank5
// s2+num2= Modi6


// 4. Write an operation to get its result as NaN. 
console.log(Math.sqrt(-2));


// 5. Take 2 boolean variables as true and false and perform 
// And and Or logical operation over them and print the 
// result as well as operation 
let c= true;
let d= false;
console.log(`
c AND d= ${c&&d}
c OR d= ${c||d}
`);
// Output:
// c AND d= false
// c OR d= true


// 6. Take 2 variables and compare them using == and 
// === such that result of both the comparisons operation 
// is not equal.
let e=5;
let s3= "Mayank";
console.log(`
e==s3: ${e==s3?"Equal":"Not Equal"}
e===s3: ${e===s3?"Equal":"Not Equal"}
`);
// Output:
// e==s3: Not Equal
// e===s3: Not Equal



