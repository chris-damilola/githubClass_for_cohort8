// // ARRAYS AND ARRAY METHOD
// const arr = [1, "CHris", true, [1, 2, 3]];

// let students = ["Chris", "Damilola", "Olusegun", "Joshua"];
// // To call the items in a particular position in array
// console.log(students[0]);
// // To find the length of the array
// console.log(students.length);
// // To change the item in the array
// students[2] = "Amoke";
// console.log(students);
// // To add item at the end of the aarray
// students.push("Aremu");
// console.log(students);
// // To add item to the beginning of the aarray
// students.unshift("Mr");
// console.log(students);
// // Removing elements
// // This will remove the last item in an array
// students.pop();
// console.log(students);
// // This will remove the first item in an array
// students.shift();
// console.log(students);

// //Include, indexof
// // Will check if items exist in an array and also check the index of the item
// console.log(students.includes("Aremu"));
// console.log(students.indexOf("Aremu"));

// console.log(students.includes("Damilola"));
// console.log(students.indexOf("Damilola"));

// Array Methods
//Reverse, sort, slice, splice
// let students = ["Chris", "Damilola", "Olusegun", "Joshua", "Busayo", "Aremu"];
// students.reverse();
// console.log("This is reversed:", students);

// students.sort();
// console.log("This is sorted:", students);

// console.log("This is sliced:", students.slice(1, 4));
// console.log("This is spliced:", students.splice(1, 2, "Dasola", "Amoke"));
// console.log("This is the array:", students);

// Higher order array method
// map, filter, reduce, forEach, find, findIndex, some, every
// MAP
const studentScore = [34, 23, 12, 15, 19, 25];
const studentTotal = studentScore.map((num) => (num += num));
console.log(studentTotal);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const double = numbers.map((num) => {
  return num * 2;
});
console.log(double);

const marketList = ["rice", "beans", "garri", "spag"];
const addedPrefix = marketList.map((item) => "I will buy:" + item);
console.log(addedPrefix);

const addPrefix = marketList.map((item) => {
  return "I will buy:" + item;
});
console.log(addPrefix);

// FILTER
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion = ["dark", "fair", "medium", "dark", "fair"];
const darkComplexion = complexion.filter((item) => item === "dark");
console.log(darkComplexion);

const findFirstDark = complexion.find((item) => item === "dark");
console.log(findFirstDark);
//  find will return the first element that matches the condition

const findIndexOfDark = complexion.findIndex((item) => item === "dark");
console.log(findIndexOfDark);
// IndexOf will give the index of the first element that matches the condition

//Reduce
const nums = [700, 300, 500, 1000, 2000];
const sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum);
// const sum = nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

const multiply = nums.reduce((acc, cur) => acc * cur, 1);
console.log(multiply);
