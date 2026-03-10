/* In many cases TypeScript already knows the type, so we don't need type annotations. This automatic guessing is called: Type Inference

TypeScript infers (guesses) the type automatically. */

let age = 18;
// age = "sri"; //error

// age -> number

let numbers = [1,2,3] // number -> number[] -> array of numbers




// Inference works when a value is given. But When There Is No Value Inference cannot work.

let marks; //marks -> any -> dangerous
marks = 18;
marks = false //TypeScript will allow everything.
marks = "hello"   //That defeats the purpose of TypeScript.

// Developer refer either Annotation or Inference but not empty variables

// Type Annotation → You specify the type
// Type Inference → TypeScript guesses the type



function add(a: number, b: number){
    return a + b;
}
// here TypeScript infers return type automatically , type -> number


