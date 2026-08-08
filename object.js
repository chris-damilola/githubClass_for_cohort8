// //OBJECT
// let student = {
//   name: "Chris Damilola",
//   age: 31,
//   department: "Computer Engineering",
//   isEnrolled: true,
//   friends: ["Dasola", "Segun", "Aremu"],
// };

// let phone = {
//   brand: "Samsung",
//   model: "Galaxy S22",
//   price: 350000,
// };
// // ADD properties to the object
// phone.color = "Black";
// console.log(phone);

// student.gender = "male";
// console.log(student);

// // UPDATE properties of the object
// student.gender = "female";
// console.log(student);

// //DELETING properties fron the object
// delete student.department;
// console.log(student);

// console.log(employee);

// let fruits = ["apple", "banana", "pear", "grape"];
// fruits.forEach((fruit) => {
//   console.log(`I love  ${fruit}`);
// });

// fruits.forEach(function (fruit) {
//   console.log(`I love ${fruit}`);
// });

// fruits.map(function (addPrefix) {
//   console.log(`I will buy ${addPrefix}`);
// });

// let studentScore = [20, 21, 12, 90];
// studentScore.forEach(function (score) {
//   console.log(score * 2);
// });

// studentScore.map(function (num) {
//   console.log(num + 5);
// });

// let grade = studentScore.filter((score) => score >= 20);
// console.log(grade);

// let lessS = studentScore.filter(function (score) {
//   return score <= 20;
// });
// console.log(lessS);

// OBJECT DETRUCTURING
let employee = {
  name: "Chris Damilola",
  role: "Backend Developer",
  salary: 450000,
  city: "Osogbo",
};

let hisNAme = employee.name;
let hisRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city;

const { name, role, salary, city } = employee;

// Spread and rest operat
let DNA = {
  gender: "XY",
  complexion: "Dark",
};

let offSpring = {
  ...DNA,
  name: "Chris",
  age: 30,
};
console.log(offSpring);

// ITERATING OVER OBJECTS

console.log(Object.keys(offSpring));
console.log(Object.values(offSpring));
console.log(Object.entries(offSpring));
