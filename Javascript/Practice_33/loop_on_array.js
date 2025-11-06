//array properties and loops
let a = [1, 2, 5, 6, 8];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}


let newarr = a.map((e) => {
    return e ** 2;
})

console.log(newarr);


a.forEach((value, index, arr) => {
    console.log(value, index, arr);
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const element = obj[key];

    console.log(key, element);
}

for (const iterator of a) {
    console.log(iterator)
}

/*
let squarearr = []
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    squarearr.push(element**2)
}
*/

//map
let squarearr = a.map((value, index, array)=> {
    return value * value;
})

console.log(squarearr);

//filter
const greaterThanSeven = (e)=>{
    if(e>7)
    {
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterThanSeven))

//reduce
let arr2 = [1,2,3]
const add = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(add));


//Arrray from
console.log(Array.from("sonu"));

//for ..of
//for ...in


const n = [1,2,3]
// n = [79,90]
console.log(n)   //TypeError: Assignment to constant variable

let b = [0,1,2,3,4]
console.log(b.pop())
console.log(b.push(40))

let d = [7, 8, 9]
delete d[1]
console.log(d)