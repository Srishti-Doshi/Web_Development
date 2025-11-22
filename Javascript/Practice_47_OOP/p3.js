class Animal {
    constructor(name) {
        this.name = name
        console.log('constructor ...');
    }

    eats() {
        console.log('eats is a function ');
    }

    jumps() {
        console.log('jumps is another function ');
    }
}

let a = new Animal("bunny");

console.log(a);
console.log(a.eats());
console.log(a.jumps());

console.log(a.name);

class lion extends Animal{ // lion have all the properties of Animal


}

let l = new lion("Simba");
console.log(l);
