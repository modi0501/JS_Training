// Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

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

const returnArrayUsingPromises = (employeeArray) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(employeeArray)) {
      resolve(employeeArray);
    } else {
      reject("Not a valid array!");
    }
  });
};

returnArrayUsingPromises(employeeArray)
  .then((employeeArray) => {
    setTimeout(() => {
      console.log(employeeArray);
    }, 1500);
  })
  .catch((error) => {
    console.log(error);
  });


  
// Create another promisified function that sorts this employee list from above response by name. Chain it to above promise

const customSort = (a, b) => {
  if (a["name"] < b["name"]) return -1;
  else if (a["name"] > b["name"]) return 1;
  else return 0;
};

const sortEmployeeByName = (employeeArray) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(employeeArray)) {
      const newArray = employeeArray.sort(customSort);
      resolve(newArray);
    } else {
      reject("Not a valid array!");
    }
  });
};

returnArrayUsingPromises(employeeArray)
  .then((employeeArray) => sortEmployeeByName(employeeArray))
  .then((newArray) => {
    console.log(newArray);
  })
  .catch((error) => {
    console.log(error);
  });
