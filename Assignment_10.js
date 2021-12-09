const Employees = require("./Employees");

const employeeArray = [
  {
    id: 1,
    name: "Mayank",
    age: 20,
    salary: 570000,
  },
  {
    id: 2,
    name: "Adesh",
    age: 20,
    salary: 470000,
  },
  {
    id: 3,
    name: "Rishabh",
    age: 40,
    salary: 500000,
  },
  {
    id: 4,
    name: "Karan",
    age: 60,
    salary: 550000,
  },
];

const obj = new Employees(employeeArray);

let sortedArray = obj.sortEmployees("name", "<");
console.log(sortedArray);

sortedArray = obj.sortEmployees("name", ">");
console.log(sortedArray);

let filteredArray = obj.filterByAge("=", 20);
console.log(filteredArray);

filteredArray = obj.filterByAge("<", 50);
console.log(filteredArray);
