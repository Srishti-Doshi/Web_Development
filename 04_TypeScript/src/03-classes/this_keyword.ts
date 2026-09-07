// this keyword
// this refers to the current object. It allows a method or constructor to access the properties of the object being created.

class Person {
    name: string

    constructor(name: string){
        this.name = name
    }
}


// this -> current object
// this.name ->  the name property of the current object



let p1 = new Person("Srishti")

// this.name => p1.name       = "Srishti"


/* In Person class, we have two things named name.
1️⃣ Property of the class    name: string
This belongs to the object.

2️⃣ Parameter of the constructor    constructor(name: string)
This is a local variable that holds the value passed when the object is created.

Example : let p1 = new Person("Srishti")

So inside the constructor: name = "Srishti"

this.name = name
means
object.property = constructor parameter

p1.name = "Srishti"

this tells TypeScript: use the property of the current object

*/