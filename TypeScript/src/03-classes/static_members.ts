// Static Members
// A static member belogs to the class itself, not to objects

//Normally :    object.property

// But static members are accessed using :      className.property

class Car {
  static wheels = 4;
  public brand: string = "Toyota";
}

// Now we access it like this:

console.log(Car.wheels); // no need to create any object

// Static members represent shared data for the entire class.
// Example : Math constants, Utility functions, Counters...

let c1 = new Car();
let c2 = new Car();

// now each object has its own copy of value
c1.brand; // => "Toyota"
c2.brand; // => "Toyota"

// So these properties(like value) belong to each object separately.

/*
Sometimes Data Belongs to the Class, Not Objects
Example idea: All cars have 4 wheels
We don't need every object to store wheels = 4
Instead we can store it once in the class  
*/

// Example: counting how many objects created

class User {
  static count = 0;

  constructor() {
    User.count++;
  }
}

let u1 = new User();
let u2 = new User();
let u3 = new User();

console.log(User.count);

// normal property → belongs to object => object.property

// static property → belongs to class => Class.property

class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }
}

MathUtils.add(3,4)