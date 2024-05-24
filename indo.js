const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

// Function to display all properties of the car

function displayCarProperties(car) {
  for (const property in car) {
    console.log(`${property}: ${car[property]}`);
  }
}

displayCarProperties(car);



const student = {
  name: "John",
  age: 18,
  grade: "A"
};

// Method to update the student's grade
function updateGrade(newGrade) {
  student.grade = newGrade;
}

updateGrade("B");
console.log(student);



function countProperties(obj) {
  return Object.keys(obj).length;
}

const exampleObject1 = { a: 1, b: 2, c: 3 };



// Function to check if an object has a specified property
function hasProperty(obj, propertyName) {
  return obj.hasOwnProperty(propertyName);
}

const exampleObject= { name: "Alice", age: 25 };
console.log(hasProperty(exampleObject, "age")); // true
console.log(hasProperty(exampleObject, "email")); // false


// Program to calculate the area of a circle
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log(area);


const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString);




const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Alice", 30, "alice@example.com");
addUser("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("Alice", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);
