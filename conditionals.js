/*
// IF / ELSE
let age = 15;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can not vote!");
}

// IF / ELSE ? ELSE IF

let gender = "male";

if (gender === "female") {
  console.log("You are a female, use the lady's room");
} else if (gender === "male") {
  console.log("You are a male, use the guy's room");
} else if (gender === "non-binary") {
  console.log("You are non-binary, use the non-binary room");
} else {
  console.log("You are a trans-binary, use the trans-binary room");
}

// FOR LOOP
// count 1 - 5

for (let i = 1; i <= 5; i++) {
  console.log(+i);
}

let fruit = ["Orange", "Pears", "Breads"];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

let arrOfNames = ["james", "jane", "chris", "alice"];
for (let names = 0; names < arrOfNames.length; names++) {
  console.log("TECHCRUSH" + arrOfNames[names]);
}

let studentScrores = [20, 12, 60, 13, 61, 16];
let sum = 0;
for (let score = 0; score < studentScrores.length; score++) {
  sum += studentScrores[score];
}
console.log(sum);

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[1]);
}


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

*/
// const studentScores = [20, 12, 60, 13, 61, 16];
// const score = [];
// for (let i = 0; i < studentScores.length; i++) {
//   score.push(100 - studentScores[i]);
// }
// console.log(score);

// for (let x = 1; x <= 36; x++) {
//   console.log(x * 2);
// }

// for (let x = 0; x <= 12; x++) {
//   console.log(`x * ${x} = ${x * 3}`);
// }

// // WHILE LOOP
// let loginAttempts = 0;
// while (loginAttempts < 5) {
//   console.log(`attempts number: ${loginAttempts}`);
//   loginAttempts++;
// }

// let scores = [20, 12, 25, 15];
// newScore = [];
// for (let i = 0; i < scores.length; i++) {
//   newScore.push(scores[i] + 20);
// }
// console.log(newScore);

// let scores = [20, 12, 25, 15];
// for (let i = 0; i < scores.length; i++) {
//   console.log(scores[i] + 20);
// }

const arrNames = ["MasterPitan", "Chris", "Dasola", "Kolade"];
for (let names = 0; names < arrNames.length; names++) {
  console.log(`Comrade ${arrNames[names]}`);
}
