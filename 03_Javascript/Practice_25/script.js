var a = 2
a = a + 1
var a = 2
var $b = 4

var _c = "Srishti"

// var 5a = 10  ->not allowed

console.log(a+$b)
console.log(a+_c)

console.log(typeof a, typeof b, typeof c)

// {
//     var a = 4
//     console.log(a)
// }
//     console.log(a)

{
    let a = 4
    a = a + 8
    console.log(a)
}
// let a = 7 -> not allowed
console.log(a)


let d = 1
// let d =2 -> not allowed

const c1 = 3
// c1 = c1 + 2 -> not allowed
console.log(c1)

let c7
var c8
// const c9 -> not allowed

let o = {
    name : "Srishti",
    "full name" : "Srishti Doshi",
    is_smart : true
}
console.log(o)

o.sem = "5th semester";
console.log(o)

o.nick_name = "tinki";
console.log(o)

o.nick_name = "tinka";
console.log(o)

// o.'full name' = "SD";
// console.log(o)

let x = null
let y = 21
let z = "puuung"
const p = "@"
let q = undefined
let r = true
let s = 2345

console.log(x, y, z, p, q, r, s)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r, typeof s)