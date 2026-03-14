/*Two syntaxes for Type Assertion

TypeScript allows two ways to write type assertions.

1️⃣ Angle-bracket syntax
2️⃣ as syntax (modern & preferred)
*/

let value: unknown = "hello";
// let length = value.length;
let length = (<string>value).length;




let marks: unknown = 87;
// let add = marks + 5;
let add = (marks as number) + 5;
console.log(add);

//Here TypeScript does not allow math on unknown, so assertion becomes useful.




const input = document.getElementById("username") as HTMLInputElement;

//because TS only knows : HTMLElement | null but you know taht its actually an input element so you assert the type




var str = '1';
// var str2: number = str;
// var str2: number = <number>str;

// var str2: number = <any>str;
// console.log(str2 + 5)

var str2: number = <number><any>str;
console.log(typeof(str2));


var str2: number = str as any as number;

// Type assertions are compile-time only and do not change the runtime type.
// Type assertion only changes TypeScript's belief, not the actual value.