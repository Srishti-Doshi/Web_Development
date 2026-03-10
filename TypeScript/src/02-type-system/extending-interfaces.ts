// Sometimes we already have an interface, but we want to add more properties without rewriting everything. TypeScript allows this using: extends


interface Person {
    name: string;
    age: number;
    contactNo?: number; //optional
}

interface Student extends Person{
    marks: number;
}
// Student inherits properties(name, age) from Person.

let student1 : Student = {
    name: "Srishti",
    age: 18,
    marks: 95
};

// If an object is typed with an interface, it must contain all required properties of that interface.


/*
let student2 : Student = {
    name: "abc",
    marks: 78,
};  //error age is missing
*/