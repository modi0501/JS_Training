// Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
const employee = {
  name: "Mayank Modi",
  email: "abc@gmail.com",
  age: 20,
  address: "Indore, Madhya Pradesh",
  phoneNumber: "1234567890",
  gender: "Male",
  isMarried: false,
};

try {
  throw employee.age / null;
} catch (error) {
  console.log(employee.age / 2);
}

// Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function
const printAfterTimeout = (m, n) => {
  for (let i = m; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  }
};

printAfterTimeout(1, 30);
