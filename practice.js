// SECTION A: DATA TYPES PRACTICE
// 1.
let name = "Damilola Olusegun";
let age = 40;
let studentStatus = true;
console.log(name, typeof name);
console.log(age, typeof age);
console.log(studentStatus, typeof studentStatus);

// 2.
let shoppingList = ["Oranges", "Chocolates", "Bread", "Pears"];
console.log(shoppingList, typeof shoppingList);
// Noticed that the typeof the listed items in the arrays are 'object'

//SECTION B: ARITHMETIC OPERATORS
// 3.
let num1 = 40;
let num2 = 15;
add = num1 + num2;
subtract = num1 - num2;
multiply = num1 * num2;
division = num1 / num2;
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(division);

// 4.
modulo = 17 % 5;
console.log(modulo);

// 5.
let price = 1500;
let discount = 200;
substract = price - discount;
console.log(substract);

//. SECTION C: COMPARISON OPERATORS.
// 6.
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
// because 'a' is a number and 'b' is a string. a==b is true because equal sign does type coersion and a ===b is false because strictly equal sign does not perform typ coersion

// 7.
let score = 70;
let number = 50;
console.log(score >= number);

//SECTION D: LOGICAL OPERATORS
// 8.
let hasTicket = true;
let hasId = false;
canEnter = hasTicket && hasId;
console.log(canEnter);

// 9.
canAccess = hasTicket || hasId;
console.log(canAccess);

// 10.
let password = "1234";
let correctPassword = "1234";
console.log(password === correctPassword);

// 11.
let budget = 5000;
let itemPrice = 1200;
itemAffordable = budget > itemPrice && budget > 0;
console.log(itemAffordable);

let scores = [80, 45, 92, 30];
const HighScore = scores.filter((score) => {
  return score > 50;
});
console.log(HighScore);

function hisName(name) {
  try {
    if (!name) {
      throw new Error("Name not found");
    }
    console.log("This is the name: " + name);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
}
hisName("Chris");
hisName("");

let employee = {
  name: "chris",
  age: 32,
  city: "Lagos",
  salary: 35000,
};

const { name, age, city, salary } = employee;
console.log(name);
console.log(employee.name);
