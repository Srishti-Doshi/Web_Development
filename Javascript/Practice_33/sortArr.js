// The sort() function in JavaScript is used to arrange the elements of an array in a specific order — either alphabetical or numerical, ascending or descending.
// It changes (mutates) the original array — it doesn’t create a new one.
//ChatGPT said:

//When you call sort() without any compare function, JavaScript automatically converts each element into a string and compares them character by character based on Unicode values (the character encoding order).
let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits);

/*
By default, sort() treats everything as a string — even numbers.
So it compares digit by digit (like words) instead of by value.
 it sorts lexicographically (dictionary-style), not numerically.*/

let numbers = [10, 5, 20, 2];
numbers.sort();
console.log(numbers);

/*
Sorting numbers correctly using a compare function
If a < b, then a - b is negative → so a goes before b.
If a > b, then a - b is positive → so a goes after b.
If a == b, a - b is zero → they stay in whatever relative order (no change).
*/
numbers.sort((a, b) => a - b);
console.log(numbers);

//Descending Order
let arr = [10, 5, 20, 2];
arr.sort((a, b) => b - a);
console.log(arr);

//Sorting Strings
let names = ["Srishti", "Tinku", "Appu", "Sonu"];
names.sort();
console.log(names);

//Sorting Objects by a Property
let students = [
  { name: "Tinku", marks: 85 },
  { name: "Appu", marks: 92 },
  { name: "Sonu", marks: 75 }
];

students.sort((a, b) => a.marks - b.marks);
console.log(students);
