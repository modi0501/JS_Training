// 1. Take 2 numbers and print the smallest one amongst them
let a=5;
let b=6;

let result=a<b? "a is the smallest one.": "b is the smallest one.";
console.log(result);
// Output: a is the smallest one.


// 2. Take 3 numbers and print the biggest one amongst them
let c=7;
if (a > b) {
    if (a >= c)
        console.log("a is largest.");
    else
        console.log("c is largest.");
} else {
    if (b >= c)
        console.log("b is largest.");
    else
        console.log("c is largest.");
}
// Output: c is largest.


// 3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". 
const score= 87;
let grade= "NA";
switch(Math.floor(score/10)){
    case 10:
    case 9:
        grade="A";
        break;
    case 8:
        grade="B";
        break;
    case 7:
        grade="C";
        break;
    case 6:
        grade="D";
        break;
    case 5:
        grade="E";
        break;
    default:
        grade="F";
}
console.log(`Grade: ${grade}`);
// Output: Grade: B

