class Animal {
    constructor() {
        console.log('constructor ...');
    }

    eats() {
        console.log('eats is a function ');
    }

    jumps() {
        console.log('jumps is another function ');
    }
}

let a = new Animal(); // 'a' named object is created of Animal class

console.log(a);
console.log(a.eats());
console.log(a.jumps());
//console.log(a.runs()); // error a.runs is not a function at object.<anonymous>


// prototype is a way to add more properties to object