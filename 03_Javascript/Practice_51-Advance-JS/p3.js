//Spread syntax

function sum(a, b, c){
    return a + b + c;
}

let arr = [1, 4, 6]
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(arr[0], arr[1], arr[2]));

console.log(sum(...arr)); // spread operate -> spread the arr values


const arr1 = [11, 22, 33];
const value = {...arr1}; //{ '0': 11, '1': 22, '2': 33 }
console.log(value);
