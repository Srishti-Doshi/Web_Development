/*
Case Study: let and const in TypeScript

In modern applications, some values need to change during execution,
while others must remain fixed. TypeScript provides let and const
to control how variables behave and where they can be accessed.

Using let and const properly helps avoid accidental changes and
redeclared variables in large codebases.
*/


// -------------------- USING LET --------------------

// let allows reassignment
let userScoreValue: number = 75;
console.log("Initial score:", userScoreValue);

userScoreValue = 90; // allowed
console.log("Updated score:", userScoreValue);


// -------------------- BLOCK SCOPE WITH LET --------------------

let isLoggedInFlag: boolean = true;

if (isLoggedInFlag) {
  let sessionResultValue: number = 10;
  console.log("Inside block result:", sessionResultValue);
}

// Accessing sessionResultValue here will cause an error
// console.log(sessionResultValue);


// -------------------- NO REDECLARATION WITH LET --------------------

let petTypeName: string = "Cat";
console.log("Pet:", petTypeName);

// let petTypeName: string = "Dog"; // Error: cannot redeclare in same scope


// -------------------- SAME NAME IN DIFFERENT BLOCKS --------------------

let hasPermissionFlag: boolean = false;

if (hasPermissionFlag) {
  let accessLevelValue: number = 1;
  console.log("Access level:", accessLevelValue);
} else {
  let accessLevelValue: number = 2;
  console.log("Access level:", accessLevelValue);
}

// accessLevelValue is not accessible here


// -------------------- USING CONST --------------------

// const variables cannot be reassigned
const applicationTitle: string = "SecureApp";
const maxUserLimit: number = 100;

console.log("App:", applicationTitle);
console.log("Max users:", maxUserLimit);


// -------------------- CONST RULES --------------------

if (true) {
  const fixedRateValue: number = 3.14;
  console.log("Fixed rate:", fixedRateValue);

  // fixedRateValue = 3.15; // Error: cannot reassign const
  // const fixedRateValue: number = 3.14; // Error: cannot redeclare
}


// -------------------- STEP-BY-STEP PRACTICE --------------------

// let example
let currentUserName: string = "Alex";
console.log("User:", currentUserName);

// const example
const maxAttemptsAllowed: number = 5;
console.log("Max attempts:", maxAttemptsAllowed);


// Block scope example
if (true) {
  let temporarySessionId: string = "abc123";
  console.log("Session ID:", temporarySessionId);
}

// console.log(temporarySessionId); // Error


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// Using let
let gamePointsValue: number = 20;
console.log("Game points:", gamePointsValue);

if (true) {
  let gamePointsValue: number = 40;
  console.log("Game points inside block:", gamePointsValue);
}

// Using const
const homeCountryName: string = "India";
console.log("Country:", homeCountryName);

// homeCountryName = "Canada"; // Error
// let gamePointsValue: number = 50; // Error in same scope


/*
Conclusion:
let and const help control how variables are declared and used.
let is useful when values change, while const protects values
that should remain fixed. Both provide block scope, making
TypeScript code safer and easier to maintain.
*/
