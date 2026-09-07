let obj = {
    a: 1,
    b: "sri"
};

console.log(obj);

// Prototype Inheritance -> js objects have a special property called prototype that is eithefr null or references another object
// Prototype ->have some functions which can be used on obj but functions objects ke nahi hai, additionally diye gaye hai

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;  // sets rabbit.[[Prototype]] = animal

console.log(animal.eats)//true
console.log(animal.jumps) //undefined
console.log(rabbit.eats)//true
console.log(rabbit.jumps) //true