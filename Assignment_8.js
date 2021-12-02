// 1. Create a function that takes a number and prints all even numbers upto that number

const printEvenNumbers = (number)=>{
    for(let i = 0 ; i <= number ; i += 2){
        console.log(i);
    }
}
printEvenNumbers(15);


// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.

const employeeArray = [
    {
        name : "Mayank Modi",
        email : "abc@gmail.com",
        age : 20,
        address : "Indore, Madhya Pradesh",
        phoneNumber : "1234567890",
        gender : "Male",
        isMarried : false
    },
    {
        name : "Sanjay Modi",
        email : "abc@gmail.com",
        age : 40,
        address : "Indore, Madhya Pradesh",
        phoneNumber : "1234567890",
        gender : "Male",
        isMarried : true
    },
    {
        name : "Adesh Modi",
        email : "abc@gmail.com",
        age : 70,
        address : "Indore, Madhya Pradesh",
        phoneNumber : "1234567890",
        gender : "Male",
        isMarried : false
    }

]

const fun = (employeeArray , age) => {
    let newArray = employeeArray.filter((employee) => {
       return employee.age < age;
    });
    return newArray;
}

const ageRestrictedArray = fun(employeeArray , 50); 
console.log(ageRestrictedArray);


// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.

const customSort = (employeeArray , attribute) => {

    const compare = (a , b)=>{
        if(attribute === "isMarried"){
            if(a[attribute] === true && b[attribute] === false){
                return -1;
            }
            else if(a[attribute] === false && b[attribute] === true){
                return 1;
            }
            else return 0;
        }
        else if (a[attribute] > b[attribute]) {
            return 1;
        }
        else if (a[attribute] < b[attribute]) {
            return -1;
        }
        return 0;
    };

    employeeArray.sort(compare);
}

customSort(employeeArray , "name");
console.log(employeeArray);