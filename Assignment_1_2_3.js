// Assignment 2

// PART 1

// Variable declaration for storing form details.
let name;
let email;
let age;
let address;
let phoneNumber;
let gender;
let isMarried;


console.log(name,age,address,phoneNumber,gender,isMarried);
// Output: undefined undefined undefined undefined undefined undefined

// PART 2
name= null;
email=null;
age=null;
address=null;
phoneNumber=null;
gender=null;
isMarried=null;

console.log(name,age,address,phoneNumber,gender,isMarried);
// Output: null null null null null null

// PART 3
const employeeDetails={
    name,
    email,
    age,
    address,
    phoneNumber,
    gender,
    isMarried
};

console.log(employeeDetails);
// Output:
// {
//     name: null,
//     email: null,
//     age: null,
//     address: null,
//     phoneNumber: null,
//     gender: null,
//     isMarried: null
//   }


// Assignment 3
name="Employee Name";
email="abc@gmail.com";
age=18;
address="Indore, Madhya Pradesh";
phoneNumber="1234567890";
gender="Female";
isMarried=false;

console.log(name,age,address,phoneNumber,gender,isMarried);
