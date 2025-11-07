//Write a program to calculate factorial of a number using reduce and using for loops

//using for loop
let num = 6;
fact = 1
for (let i = 1; i <= num; i++) {
      fact = fact * i;
}

console.log(fact)

let num1 = 6;
arr = [1,2,3,4,5,6];
console.log(arr.reduce((a,b)=>a*b));