/*
let x = 50;
let y = 5;

// Arithmetic Operators:
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Comparison Operators:
let a = 10;
let b = 20;
console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);
*/

const studentName = "Amara Johnson";
const courseTitle = "JavaScript Basics";
let weeksCompleted = 0;
let totalScore = 0;
let isEnrolled = true;
const courseFee = 50000;
// After week 1;
weeksCompleted += 1;
totalScore += 85;
console.log(weeksCompleted);
console.log(totalScore);

// let can be used to declared var that can be reassigned like "age"

// const are used for var that cannot be reassigned or redeclared like "Name", "Country"

// data type used to store someone's name is String
// data type used to store someone's age is Number
// data type used to store whether they have paid their fees is Boolean.

// let amount = 10000;
// let discount = 2000;
// total = (amount - discount)
// console.log(total)

// will get an error that a var has already been declared;
// var age = 10;
// const age = 20;
// console.log(age);

// result of 15 % 4 is 3;

// LOgical operator
let isAdult = true;
let isYoung = false;
console.log(isAdult && isYoung);
console.log(isAdult || isYoung);

//Assignment Operator
let a = 20;
console.log((a += 5));
console.log((a -= 10));
console.log((a *= 2));
console.log((a /= 2));
console.log((a %= 2));
