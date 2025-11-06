//function

function fun(x, y){
    sum = x + y;
    return sum;
}
console.log(fun(2,3));


//anonymous function

let a = function(x, y){
    sum = x + y;
    return sum;
}
console.log(a(3,4));


//Arrow function
 
let b = (x, y) =>{
    sum = x+y;
    return x+y;
}

console.log(b(1,2))

let g = x => {return x+5;}
console.log(g(6));

let arr = [10,2,63,4];

arr.sort(compare= x=>a-b);

console.log(arr);