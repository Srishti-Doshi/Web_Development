
//Interface vs Type alias

//Both interface and type can describe object structures.Both behave exactly the same here.So for object shapes, you can use either.

//Interface
interface Shape {
    name: string;
    area: number;
    color: string;
}

//Usage
let shape1: Shape = {
    name : "circle",
    area : 400,
    color : "blue"
}


//Type Alias
type ShapeType = {
    name: string;
    area: number;
    color: string;
}

//Usage
let shape2: ShapeType = {
    name : "circle",
    area : 400,
    color : "blue"
}

// both interface and type alias may look same while using but are different

// Interfaces are mainly designed for objects and class structures.
// interface → structure of an object




// type → alias (nickname) for a type
//A type alias simply gives a name to a type. Types are more general. They can represent any type, not just objects.


// primitive alias
type Name = string;  // here Name -> alias for string

// union
type Status = "success" | "error" | "loading";

let s: Status= "loading";

// function
function printStudent(student: {name: string; marks: number}){
    console.log(student.name);
}

printStudent({name: "Sonu", marks: 95});

// Instead of writing this long object type every time: We can use type alias as 
type Student = {
    name: string;
    marks: number;
};

function printStudentDetail(student: Student){
    console.log(student.name);
}

printStudentDetail({name: "Sonu", marks: 95})


//Function with return type
type allNo = (a: number, b: number) => number;

const add : allNo = (a, b) => {
    return a + b;
};

let add_result = add(4,5);

const multiply : allNo = (a, b) => a * b;  //Develope often write in this way 

let mul_result = multiply(5,6);


//type alias to type callbacks
type Operation = (a: number, b: number) => number

function calculate(a: number, b: number, op: Operation) {
  return op(a, b);
}

calculate(5, 2, (x,y) => x-y);   //anonymous function   (x,y) => x-y    No name, just passed directly.









//Declaration Merging => same Interface Can Be Declared Multiple Times, and TypeScript will merge them automatically.

interface Person{
    name: string;
}

interface Person{
    age: number;
}

let p : Person = {
    name: "p",
    age : 20
}

// But type cannot do this.
/*
type Animal = {
    name : string;
}

type Animal = {
    age : number;
}
*/
// Error : Duplicate identifier 'Person'

// interface → can merge
// type → cannot merge






// Extending

// interface → extends
interface Fruit{
    name: string;
    calories: number;
}

interface Watermelon extends Fruit{
    taste: "sweet" | "sour";
}

let w1: Watermelon = {
    name: "Indian Watermelon",
    taste: "sweet",
    calories: 200
}
/*
let sw2: Watermelon = {
    taste: "sour",
    calories : 300
};
*/
// error name is missing

// type → &(intersection)
type Flower = {
    name : string;
}

type Rose = Flower & {
    isRose: boolean;
};

let f1: Rose = {
    name : "White Roses",
    isRose : true
};

/*
let f2: Rose = {
    name : "Red Roses",
};
*/
// error isRose missing



//All properties must exist.




