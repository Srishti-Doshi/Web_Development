//Arrays
// An array is a collection of multiple values stored in a single variable.

let arr = [1, 2, 3, 4];  //arr: number[] =>This array should contain only numbers


let arr2 = [1, 2, 3, 4, {name: "sri"}, {name : 12}];





//Typing Arrays
let numbers: number[] = [1,2,34];
// let arr3: number[] = [1, 2, 3, "df"] //error

let nums : Array<number> = [1, 2, 3]; //Generic sysntax

let names: string[] = ["Sonu", "Sahil", "Tiku", "Tinka"];





//mixed type arrays =>If an array can contain multiple types we use union types.

let data: (string | number)[] = [1, "hello", 3]; //Each element can be string OR number

let num = [true, 1, 2, 3, "sri"]  //num: (string | number | boolean)[] =>This is called a union type array:an array whose elements can be string OR number OR boolean


//Accessing Elements => arrays use indexing

let fruits: string[] = ["apple", "banana"];
console.log(fruits[0]); //apple



//Changing values
fruits[1] = "orange";
console.log(fruits);



//Array Methods

//push() => Adds element at end.

fruits.push("mango");
console.log(fruits);

//pop() => Removes last element.
fruits.pop()
console.log(fruits);

//shift() => removes first element
fruits.shift();
console.log(fruits);

//unshift() => adds element at begining
fruits.unshift("cherry");
console.log(fruits);


//array length
console.log(fruits.length);

//Array Spread
let a1 = [1,2];
let a2 = [3,4,5,6];

let result = [...a1, ...a2];
console.log(result);

//Array destructuring

let counting = [1, 2, 3];
let [a, b, c] = counting;

console.log(a);


// Real Life Example

type Product = {name: string, price: number};

let products : Product[] = [
    {name: "Laptop", price: 70000},
    {name: "keyboard", price: 10000}
];