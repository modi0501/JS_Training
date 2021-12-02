// 1. Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.

const obj = require('./employeeList.json');

obj.forEach((e , index) => {
    e["id"] = index+1;
});


// 2. Add a function to return list of employees that contains "am" in his name. Add it in separate file and import it to call in another file.
const fun = require('./nameSearch');
const newArray = fun.nameSearch(obj);
console.log(newArray);


// 3. Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac
let result = obj.map((e) => {
    let l = e.salary / 100000;
    l = l.toFixed(1);
    return l.toString() + " Lac";
});

console.log(result);










