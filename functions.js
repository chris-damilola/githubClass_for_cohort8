// Declaration Function
/*
function greetings() {
  console.log("HELLO WORLD!!!");
}
greetings();

function welcome(name) {
  console.log(`Welcome to class MR/MISS/MRS ${name} !!`);
}
welcome("CHRIS");

function add() {
  let x = 4;
  let y = 6;
  return x + y;
}
console.log(add());

function addition(x, y) {
  return x + y;
}
console.log(addition(5, 6));
*/

// function ageCheck(age) {
//   return age >= 18;
// }

// let estherAge = ageCheck(15);
// console.log(estherAge);

// function ageCheck(age) {
//   if (age <= 18) {
//     return "please GET OUT... You are underage";
//   } else {
//     return "Buy one bottle for me Egbon!!";
//   }
// }
// console.log(ageCheck(20));

// function luckyNumber(num) {
//   if (num === 4) {
//     return "Congratulations !!!";
//   } else {
//     return "Try Again !!!";
//   }
// }
// console.log(luckyNumber(4));

// GLOBAL SCOPE
let score = 30;
function gradingSystem() {
  if (score >= 50) {
    return "PASSED !!!";
  } else {
    return "FAILED !!!";
  }
}
let res = gradingSystem();
console.log(res);

console.log(30 === score);

// // LOCAL SCOPE
// function deliveryFee() {
//   let fee = 5000;
//   return fee;
// }

function getGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 50 && score <= 69) {
    return "B";
  } else {
    return "C";
  }
}
console.log(getGrade(80));

// ARROW FUNCTIONS
const minus = (num) => {
  return num - 50;
};
let result = minus(85);
console.log(result);
