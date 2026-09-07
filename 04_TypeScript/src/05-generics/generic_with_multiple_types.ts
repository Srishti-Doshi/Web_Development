// function pair<T, U>(a: T, b: U): [T, U]{
//     return [a,b]
// }

function pair<T, U>(a: T, b: U){
    return [a,b]
}

let p = pair(4,5)  //[4,5] => [number,number]
let p2 = pair(4, "hello")  //[4,5] => [number, string]


// [T, U] is a tuple => fixed number of elements, fixed order, fixed types




//Generic with intrface
interface Box<T>{
    value: T
}

let numberBox: Box<number> ={
    value : 10
}