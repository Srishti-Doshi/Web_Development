// Abstract Classes

// An abstract class is a class that cannot be used to create objects directly. 

abstract class Animal{
    abstract makeSound(): void
}

// let obj = new Animal()  //Error: Cannot create an instance of an abstract class

// This class cannot be instantiated

class Dog extends Animal{
    makeSound(): void {
        console.log("Woof")
    }
}

let d = new Dog()
d.makeSound()   //Woof

// An abstract class is meant to be a base blueprint for other classes, not for creating objects directly.

// Example : Vehicle -> Car, Bike, Truck . here, we don't want a generic Vehicle Object. We want specific vehicles






/*
Abstract members can be:

abstract methods
abstract properties

Both mean:
child classes must implement them
*/



abstract class Vehicle {
    abstract start(): void
}

//Now any child class of VEhicle must implement start()

class Car extends Vehicle{
    start() {
        console.log("Car starting")
    }
}

let c1 = new Car()
c1.start()


// If a class extends an abstract class, it must implement the abstract methods.

// Abstract classes can also have regular methods with implementation.

/*
Abstract class
 ├ abstract method → child MUST implement
 └ normal method   → child inherits automatically
*/

abstract class Shape{
    abstract draw(): void

    describe(): void{
        console.log("I am a shape")
    }
}
/*
draw() → must implement
describe() → already implemented
*/
class Circle extends Shape{
    draw(){
        console.log("to draw a circle, we must know its radius")
    }
}

let circle1 = new Circle()
circle1.draw()
circle1.describe()

// An abstract property declares that subclasses must provide that property, but the abstract class does not define its value.

abstract class Color{
    abstract name: string
    saturation : number = 0
}

class Red extends Color{
    name = ""
    value = 56
}

let r1 = new Red()
r1.name
r1.saturation
r1.value