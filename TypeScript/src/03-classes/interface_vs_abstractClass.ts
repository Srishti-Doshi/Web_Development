//Interface => An interface only describes structure (shape). It does not contain implementation.

interface LionFamily {
  name: string;
  makeSound(): void;
}

// This only defines a contract:

// name must exist
// makeSound() must exist

// But the interface does not implement anything.

// Interfaces cannot create objects.

//creating an object that the Animal Interface
let cat: LionFamily = {
  name: "lily",
  makeSound() {
    console.log("meow..");
  },
};

//using the object
cat.makeSound()





// Abstract Class
// An abstract class can describe structure AND contain implementation.

abstract class Animal {
  abstract Sound(): void;

  sleep() {
    console.log("Sleeping");
  }
}

// abstract method → must be implemented
// normal method → already implemented

// Abstract classes also cannot create objects directly. But we can extend them

/*
Interface → only rules
 ├ properties
 └ method signatures
(no logic)

Abstract class → rules + shared code
 ├ abstract methods
 ├ properties
 └ real methods (logic allowed)
*/




/*
TypeScript has a feature called declaration merging.

If you declare multiple things with the same name, TypeScript combines them.
*/