/*

Type Assertion
Type Casting
Non-null assertion operator

*/

//type assertion
// type assertion ka matlab typescript ko batana ki kisi particular cheez ka type kya hai, manually

let a: any = 12;

let A = a as string
A.replace
A.toLowerCase

let B = a as number
B.toFixed
B.toLocaleString


let C = <number>a
C.toFixed






//Type Casting

let d = Number("12");  //Number() is being used as a conversion function.
console.log(d)

// let e = number("12");  // wrong number only refers to a type, but is being used as a value here.  







/* Non-null assertion operator  !

The ! after a variable tells TypeScript: “I am sure this value is not null and not undefined, so don’t complain.”
*/

let name: string | null = "Srishti";

// console.log(name.length);
console.log(name!.length);
