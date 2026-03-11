// Class : A class is a blueprint/template for creating objects.
// This blueprint describes: properties (data) and methods (functions)

// But the class itself is not the actual object. It only describes how objects should look.


//Object : An object is an instance of a class.

// Class → blueprint
// Object → real thing created from that blueprint


class Person {
    name: string = ""      //properties
    age: number = 0

    greet(){               // methods
        console.log("hello")
    }
}

// this class defines that every Person has: name and age


let p1 = new Person()
p1.name = "sonu";
p1.age = 15;
p1.greet();


// Person class has two kinds of members:
// 1. Properties (data): These store information about the object.

/* Class properties must be initialized
either:
1️⃣ inside constructor
2️⃣ with default value 

strict property initialization =>TypeScript wants properties initialized immediately when the object is created.*/

// 2. Methods (functions inside a class): A method is just a function that belongs to a class. It defines behavior of the object.








// Interface vs Class => even through both can describe object structuredClone, they serve different purposes

// Interface: An interface only describes the shape of data. It does not create objects.

interface Person {
  name: string
  age: number
}

// This only says: A Person must have: name and age. But you cannot create an object from an interface. It only exists for type checking.


// Class: A class is real JavaScript code that can: create objects, store data, contain methods, run logic





// Inside a class, we are declaring properties of the object, not normal variables.
// class fields don't use variable keywords.
//Inside class we write only =>   propertyName: type

// let/const are used inside methods or functions, not at the class field level.