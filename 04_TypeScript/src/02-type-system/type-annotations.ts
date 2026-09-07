// A type annotation means telling TypeScript the type of a variable manually

// It is written using a colon : after the variable name

// variableName : type

let age: number = 18;

// variable → age
// type → number
// value → 18
// So TypeScript understands: "This variable must always contain a number."

// Common Type Annotations:

//String
let city: string = "Dewas";

//Number
let marks: number = 95;

//Boolean
let passed: boolean = true;

//Array
let numbers: number[] = [1, 2, 3];

//Object
let person: {name: string, age: number} = {
  name: "Sonu",
  age: 18,
};


//function

function greet(name: string): string{
    return "hello" + name;
}
// name → must be string
// function returns → string


// Type annotations are optional in TypeScript.
// Because TypeScript can guess types automatically.
// That concept is called Type Inference