// Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
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

const checkForValidArray = (employeeArray) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(employeeArray)) resolve(true);
    reject("Invalid Array!");
  });
};

const returnArrayAfterTimeout = (employeeArray) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employeeArray);
    }, Math.random() * 1001 + 1000);
  });
};

const printArrayUsingAsyncAwait = async (employeeArray) => {
  try {
    await checkForValidArray(employeeArray);
    const resultArray = await returnArrayAfterTimeout(employeeArray);
    console.log(resultArray);
  } catch (error) {
    console.log(error);
  }
};

printArrayUsingAsyncAwait(employeeArray);
