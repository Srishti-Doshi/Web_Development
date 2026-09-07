/*
An interface defines the structure of an object.
It describes:
    What properties an object must have and their types

=> form template => must fill
*/

//Interface
interface Person {
    name: string;
    age: number;
    gender?: string; //optional => string | undefined
}

// Any Person object must contain:
// name → string
// age → number

//Using the Interface

let student1: Person = {
    name: "Sri",
    age: 18
};

let student2: Person = {
    name: "Sri",
    age: 18,
    gender: "f"
};

/*
let student: Person = {
    name: "Sri",
};
Error => age is missing
*/