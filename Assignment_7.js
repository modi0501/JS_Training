// 1. Take an array of objects of employees created above and print those employees whose age is less than 50.

const employeeArray=[
    {
        name:"Mayank Modi",
        email:"abc@gmail.com",
        age:20,
        address:"Indore, Madhya Pradesh",
        phoneNumber:"1234567890",
        gender:"Male",
        isMarried:false
    },
    {
        name:"Sanjay Modi",
        email:"abc@gmail.com",
        age:40,
        address:"Indore, Madhya Pradesh",
        phoneNumber:"1234567890",
        gender:"Male",
        isMarried:false
    },
    {
        name:"Adesh Modi",
        email:"abc@gmail.com",
        age:70,
        address:"Indore, Madhya Pradesh",
        phoneNumber:"1234567890",
        gender:"Male",
        isMarried:false
    }

]
console.log("Employees whose ages are less than 50");
employeeArray.filter((e)=>{
    if(e.age<50)
    console.log(e.name,e.age);
});