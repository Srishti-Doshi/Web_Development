// ...  rest/spread operator

function nums(a: number, b: number,c: number,d: number,e: number,f: number,g: number){

}

nums(1,2,3,4,5,6,7);


//rest
function numsSmart(...args : number[]){
    console.log(args[0]);
    console.log(args[20]);

}

numsSmart(1,2,3,44,43,222333,33,444,44,7,8,9);
numsSmart(10,20)


//spread
let arr = [1,2,3,4,5];
let arr2 = [...arr];  // duplicate copy of arr

console.log(arr2);