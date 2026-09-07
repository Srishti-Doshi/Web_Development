// Type Assertions  => telling TypeScript the type of a value manually

let data : unknown = "hello" // TS does not knoe the exact type

// data.toUpperCase()  // Error data is of type unknown

let str = data as string

str.toLowerCase()

/*
Type assertions do not change the actual value.

They only change what TypeScript believes the type is.
*/


let value: unknown = "Hey"
let num = value as number
console.log(num + 5) //Hey5