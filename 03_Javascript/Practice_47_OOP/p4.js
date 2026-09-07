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

class lion extends Animal {
    constructor(name) {  // this will cause an error and now we have to call Animal class constructor also using super keyword

        super(name)
        // this.name = name -> not needed
        console.log('Object is created and he is a lion');
    }
}

let l = new lion("Simba");
console.log(l);
