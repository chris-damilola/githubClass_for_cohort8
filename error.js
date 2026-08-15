// syntax error
// let add = 2 + 3 - (4 + 5;
//     console.log(add);

// Reference error
// let myName = "Chris";
// console.log(name);

// Type error
// let myName = "Chris";
// console.log(myName.length());

// try / catch  / finally
try {
  //code that might fail goes here
  let result = 10 / 2;
  console.log(result);
  studentScore.sort(); // This will cause error
  console.log("This line will NOT run.");
} catch (error) {
  // This runs ONLY if something goes wrong
  console.log("An error occurred: " + error.message + " " + error.name);
}
console.log("The program continues here");

function loadUserData(userId) {
  console.log("Starting to load data...");
  try {
    if (userId <= 0) {
      throw new Error("User ID must be greater than 0");
    }
    console.log("Data loaded for user: " + userId);
  } catch (error) {
    console.log("Failed: " + error.message);
  } finally {
    console.log("Loading complete. Closing connection."); //ALWAYS RUNS
  }
}
loadUserData(5);
loadUserData(-1);

function registerStudent(name, age) {
  try {
    if (!name) {
      throw new Error("Name cannot be empty!");
    }
    if (age < 16 || age > 60) {
      throw new Error("Age must be between 16 and 60. Got: " + age);
    }
    console.log("Student registered: " + name + ", Age: " + age);
  } catch (error) {
    console.log("Registration failed: " + error.message);
  }
}

registerStudent("Chris", 30);
registerStudent("", 22);
registerStudent("Damilola", "12");

