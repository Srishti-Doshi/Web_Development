// Destructuring

// let x, y = [1, 5]

// let [x, y] = [1, 5]
let [a, b] = [1, 5, 7]
console.log(a, b);

let [x, y, ...rest] = [1, 2, 3, 4, 56, 6];
console.log(x, y, rest);

let obj = {
    a1: 11,
    b1: 21,
    c1: 31
}

let {a1, b1} = obj;
console.log(a1, b1);

console.log(obj.c1);

