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
