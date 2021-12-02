// 1. Take two numbers and perform all the arithmetic 
// operations over them.
let a = 5;
let b = 6;

const add = a + b;
const subtract = a - b;
const multiply = a * b;
const divide = a / b;
const power = a ** b;
const mod = b % a;

console.log(`
    a + b = ${ add }
    a - b = ${ subtract }
    a * b = ${ multiply }
    a / b = ${ divide }
    a ^ b = ${ power }
    b % a = ${ mod }
`);

a++;
b--;

console.log(`
    a after increment = ${ a }
    b after decrement = ${ b }
`);

// Output:
// a + b = 11
// a - b = -1
// a * b = 30
// a / b = 0.8333333333333334
// b ^ a = 15625
// b % a = 1
// a after increment = 6
// b after decrement = 5



// 2. Take 2 numbers and 2 strings and perform addition 
// operation on them in same sequence. 

let num1 = 5;
let num2 = 6;
let s1 = "Mayank";
let s2 = "Modi"

const result1 = num1 + num2 + s1 + s2;

console.log(result1);

// Output:
// 11MayankModi

// 3. Take 2 Strings and 2 numbers and perform addition 
// operation on them in same sequence.

const result2 = s1 + s2 + num1 + num2;

console.log(result2);
// Output:
// MayankModi56


// 4. Write an operation to get its result as NaN. 
console.log(Math.sqrt(-2));


// 5. Take 2 boolean variables as true and false and perform 
// And and Or logical operation over them and print the 
// result as well as operation 
let c = true;
let d = false;

const operation_OR = c || d;
const operation_AND = c && d;

console.log(operation_OR , operation_AND);
// Output:
// true false


// 6. Take 2 variables and compare them using == and 
// === such that result of both the comparisons operation 
// is not equal.
let e = 50;
let s3 = "50";

const equals = e == s3;
const doubleEquals = e === s3;
console.log(equals , doubleEquals);
// Output:
// true false



