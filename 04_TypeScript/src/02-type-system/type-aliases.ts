// A type alias is simply giving a name to a type.

// type AliasName = SomeType;

type Age = number;

let myage: Age = 18;
//Here, myAge => Age => number


//Instead of writing this big object repeatedly:

let student1: {name: string; marks: number} = {
    name : "sonu",
    marks : 93
};

let student2: {name: string; marks: number} = {
    name : "ranu", 
    marks : 56
};

//We can create a type alias

type Student = { 
    name: string;
    marks: number
};

let student3: Student = {
    name: "monu", 
    marks: 67
};

let student4: Student = {
    name: "tinu", 
    marks: 87
};

