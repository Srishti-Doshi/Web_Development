/*
Case Study: Introduction to TypeScript

While working on large software projects, code often becomes difficult
to manage as the number of files and developers increases. Errors may
go unnoticed until runtime, which makes debugging harder and slows down
development.

TypeScript is used to solve these problems by adding structure and type
safety to JavaScript code.
*/

// TypeScript allows us to define what kind of data a variable can store
let language: string = "TypeScript";


// Basic variable declarations using types
let applicationName: string = "Company Management System";
let releaseVersion: number = 1.2;
let isLive: boolean = false;


// Arrays with type safety
let developers: string[] = ["Aman", "Riya", "Srishti"];


// Object with a defined structure
let projectInfo: {
  name: string;
  version: number;
  active: boolean;
} = {
  name: "Enterprise Software",
  version: 3.0,
  active: true,
};


// Interface used to define a common structure
interface Employee {
  id: number;
  name: string;
  department: string;
}


// Class implementation using the interface
class SoftwareDeveloper implements Employee {
  id: number;
  name: string;
  department: string;
  skill: string;

  constructor(
    id: number,
    name: string,
    department: string,
    skill: string
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.skill = skill;
  }

  getDetails(): void {
    console.log(
      `${this.name} works in ${this.department} department and specializes in ${this.skill}.`
    );
  }
}


// Creating an object of the class
let developer1 = new SoftwareDeveloper(
  101,
  "Srishti",
  "Development",
  "TypeScript"
);

developer1.getDetails();


// TypeScript detects errors before execution
let age: number = 20;
// age = "twenty";   // This line causes a type error, so it is commented


// Simple TypeScript program
let message: string = "Hello, World!";
console.log(message);


// Personalized output
let studentName: string = "Srishti";
let studentAge: number = 20;

console.log(
  "My name is " + studentName + " and I am " + studentAge + " years old."
);


// Areas where TypeScript is commonly used
let applicationAreas: string[] = [
  "Web Applications",
  "Backend Services",
  "Mobile Applications",
  "Desktop Software",
  "Game Development",
];


// Printing key points
for (let area of applicationAreas) {
  console.log("TypeScript is used in: " + area);
}


/*
Conclusion:
TypeScript helps in writing clean and structured code.
It reduces runtime errors, improves readability, and is
well-suited for large and collaborative projects.
*/
