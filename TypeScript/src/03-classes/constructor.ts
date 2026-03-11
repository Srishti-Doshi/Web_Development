// Constructor
// A constructor is a special method that runs automatically when an object is created. It is mainly used to: initialize properties

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let p1 = new Person("Tiku", 23)

// As object is created Execution flow: new Person("Srishti",18) -> constructor runs -> this.name = "Srishti" -> this.age = 18



// Only one constructor is allowed in a class

class Car {
    constructor(){
        console.log("car created")
    }
}

let c1 = new Car()
let c2 = new Car()


// So every time you create a new object, the constructor executes once.