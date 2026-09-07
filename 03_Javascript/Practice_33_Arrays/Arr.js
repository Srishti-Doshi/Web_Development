/*
JS -> Array : Collection of Multiple Data Types(Numbers, Strings, Objects)
-> to store multiple values
-> mutable
-> type of -> object
*/

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(typeof(arr));
console.log(arr.length);

arr[3] = "8a";  //mutable


console.log(arr.toString());

console.log(arr.join(" and "));

console.log(arr.pop());
arr.push("Sri");
// arr.push(100);

console.log(arr.shift());
arr.unshift("Sonu");

delete arr[4]
console.log(arr);

console.log(arr.length); //length of array is same after deleting because memory is allocated but value is deleted

let a1 = [1, 2, 3];
let a2 = [10, 20, 30];
let a3 = [100, 200, 300];

console.log(a1.concat(a2, a3)); // returns a new array, does not change existing array

console.log(b)