// Tuples => array with fixed type, size and location

let arr3: [number, string] = [23, "sr"]

// A tuple in TypeScript is a special type of array where the number of elements and their types are fixed in order.

let person : [string, number] = ["Srishti", 19];

// person = [20]; //error

// Because the order and length must match.



//Accessing tuple values
console.log(person[0]);
console.log(person[1]);


//Tuple with Named Elements (Newer TypeScript)
let user: [name: string, marks: number] = ["sonu", 90];


// Tuples are often used when returning multiple fixed values.

function studentDetails(): [string, number]{
    return ["Sahil", 123];
}

const student = studentDetails();



//Optional tuple elements
let teacher: [string, number?];

teacher = ["Mrs Doshi"];
teacher = ["Mrs Doshi", 50];


//Tuple with Rest Elements
// Rest elements in tuples allow a tuple to have a fixed beginning and then any number of additional elements of a specific type.

let data: [string, ...number[]];
data = ["scores", 80,98];




// Use tuples when each position has a specific meaning.