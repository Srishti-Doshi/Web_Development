//Method Overriding

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
    constructor(name) {
        super(name)
        console.log('Object is created and he is a lion');
    }

    eats(){
        super.eats()
        console.log('This is method overriding because I am trying to chanage an inherited method');      
    }
}

let l = new lion("Simba");
console.log(l);

console.log(a.eats());
console.log(l.eats());
