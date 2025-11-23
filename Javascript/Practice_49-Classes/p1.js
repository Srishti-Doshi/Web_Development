// Classes is one more way to create objects

// Classes in JS -> Class is a program code template for creating objects. Those objects will have some state (variables) & some behaviour (functions) inside it.

//when we want to create objects in bulk with similarity then we use create objects through classes

//Class -> blueprint / template to create objects

class ToyotaCar {
    start() {
        console.log('start');
    }

    stop() {
        console.log('stop');
    }

    setBrand(brand){
        this.brandName = brand; // here brandName is a property of object while brand is a varaiable as argument/parameter given in function 
        return brand;
    }
}

// class is a single template and With the help of a class we can crete many different - different objects
// class -> functions/variables -> no need to separate using commas
// object -> functions/variables -> need to separate using commas

// Create a object ->  let myobj = new myclass();
let Car1 = new ToyotaCar();
// new is a keyword which creates our objecst through classes

let fortuner = new ToyotaCar();

console.log(typeof fortuner);
console.log(fortuner.start());

let lexus = new ToyotaCar();
console.log(lexus.setBrand("lexus"));
