export {};
/*
Case Study: Basic Syntax in TypeScript

When working in a team on a large software project, it is important that
everyone follows the same coding rules. Clear syntax helps developers
read, understand, and maintain code easily.

TypeScript provides a structured syntax that reduces confusion,
prevents common mistakes, and keeps the code professional.
*/


// -------------------- VARIABLES --------------------

// Variable declaration with type
let message: string = "Hello World";
console.log(message);

// Case sensitivity example
let userName: string = "Srishti";
// let UserName: string = "Doshi"; // Different variable (case-sensitive)


// -------------------- IDENTIFIERS --------------------

// Valid identifiers
let firstName: string = "Srishti";
let first_name: string = "Doshi";
let num1: number = 10;
let $result: number = 50;

// Invalid identifiers (commented to avoid errors)
// let 1number = 5;
// let first name = "Test";
// let var = "keyword";


// -------------------- COMMENTS --------------------

// This is a single-line comment

/*
This is a multi-line comment.
It is used to explain code in detail.
*/


// -------------------- FUNCTIONS --------------------

// Function with typed parameter and return type
function printMessage(text: string): void {
  console.log(text);
}

printMessage("Learning TypeScript syntax");


// Function example for calculation
function printDouble(value: number): void {
  console.log("Double value is: " + value * 2);
}

printDouble(10);


// -------------------- STATEMENTS & EXPRESSIONS --------------------

let a: number = 5;
let b: number = 10;
let sum: number = a + b;

console.log("Sum is: " + sum);


// -------------------- SEMICOLONS --------------------

// Semicolons are optional, but can be used
console.log("Hello"); console.log("World");


// -------------------- WHITESPACE & FORMATTING --------------------

// Whitespace improves readability
let isActive: boolean = true;

if (isActive) {
  console.log("The system is active");
}


// -------------------- OBJECT-ORIENTED PROGRAMMING --------------------

// Class definition
class Greeting {
  greet(): void {
    console.log("Hello World!!!");
  }
}

// Object creation and method call
let greetingObj = new Greeting();
greetingObj.greet();


// -------------------- MORE OOP EXAMPLE --------------------

class Store {
  open(): void {
    console.log("Store is open!");
  }
}

let store = new Store();
store.open();


// -------------------- PRACTICE EXAMPLES --------------------

// Favorite fruit
let favoriteFruit: string = "Mango";
console.log("My favorite fruit is " + favoriteFruit);


// Person class for practice
class Person {
  sayHello(): void {
    console.log("Hello! Nice to meet you.");
  }
}

let person1 = new Person();
person1.sayHello();


// -------------------- COMPILER NOTE --------------------

/*
To run this file:
1. Save as basicSyntaxTypeScript.ts
2. Compile using: tsc basicSyntaxTypeScript.ts
3. Run using: node basicSyntaxTypeScript.js

You can also use compiler flags like:
--watch
--target
--noImplicitAny
*/


/*
Conclusion:
TypeScript syntax provides rules that make code clean,
readable, and easy to maintain. By following proper
syntax, naming conventions, and structure, large
applications can be developed efficiently.
*/
