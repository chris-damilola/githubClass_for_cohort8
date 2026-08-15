const herName = "chris";

console.log(herName.toLowerCase());
console.log(herName.toUpperCase());

function lowerMe(value) {
  return value.toLowerCase();
}
console.log(lowerMe(herName));

// To remove spaces for the strings
const trimExample = "    Hello World!   ";
console.log(trimExample.trim());
console.log(trimExample.trimStart());
console.log(trimExample.trimEnd());

let filename = "report_final_2024.pdf";
console.log(filename.startsWith("report")); // true
console.log(filename.startsWith("draft")); // false
console.log(filename.endsWith("pdf")); // true
console.log(filename.endsWith("docx")); // false

// Slice() and substring()
let fullName = "Chris Damilola";
console.log(fullName.slice(0, 5));
console.log(fullName.slice(6));
console.log(fullName.slice(-8));
console.log(fullName.substring(0, 5));
console.log(fullName.substring(6));
console.log(fullName.substring(-5));

//replace and the replaceAll
const stringText =
  "Chris is an handsome guy, Chris is so smart and Chris is a software development";
console.log(stringText.replace("Chris", "He"));
console.log(stringText.replaceAll("Chris", "He"));
let splittedText = stringText.split(",");
console.log(splittedText);
console.log(splittedText[1].replaceAll("Chris", "He"));

// Reverse
let panlidrome = "tundeednut";
let reversed = panlidrome.split("").reverse().join("");
console.log(reversed);

function wordCheck(word) {
  return word === word.split("").reverse().join("")
    ? "Yes it is a palindrome"
    : "No it is not a palindrome";
}
console.log(wordCheck("Chris"));

// function wordCheck(word) {
//   if (word === word.split("").reverse().join("")) {
//     return "Yes it is a palindrome";
//   }
//   return "No it is not a palindrome";
// }
// console.log(wordCheck("Chris"));
