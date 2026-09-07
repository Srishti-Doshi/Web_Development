// & -> AND => It means combine types

// A & B => Type must satisfy A & 


type Person = {
    name: string;
}

type Student = {
    marks: number;
}

type StudentPerson = Person & Student;

// This means StudentPerson must have: name AND marks

let s: StudentPerson = {
    name: "Sonu",
    marks: 96
    //Works because both properties exist.
}

/*
let s2: StudentPerson = {
  name: "Srishti"
  //error marks is missing
}
*/



/*

|  → OR  (Union)

&  → AND (Intersection)

Example:

number | string
→ number OR string

Person & Student
→ must satisfy BOTH

*/


type User = {
    id: number
    name: string
}

type Admin = {
    permissions: string[]
}

type Timestamp = {
  createdAt: Date
}

type AdminUser = User & Admin & Timestamp;



type Animal = {
    type : "wild" | "domestic"
}

type DomesticAnimal = Animal & {owner : string}


// Intersection only becomes a problem when types conflict.
type A = { value: number }
type B = { value: string }

type C = A & B

/*
let obj : C = {
    value: 10
}
*/


//with the help of intersection types Instead of writing big types again and again, developers build small reusable pieces.