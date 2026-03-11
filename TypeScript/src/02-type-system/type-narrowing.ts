// Any check that helps TypeScript determine a more specific type = narrowing


//Need of Type Narrowing

/*
type Value = number | string;

function printValue(v: Value){
    console.log(v.length);  //error
}
*/

// When a variable has a union type, TypeScript only allows operations that are safe for all possible types.


// string → has length
// number → does NOT have length
// So TypeScript cannot guarantee safety


// To fix that, we check the type first (this is called type narrowing).


type Value = number | string;

function printValue(v : Value){
    if(typeof v === "string"){
        console.log(v.length);
    }
}

// Now TypeScript understands: inside this block → v is string => So length becomes safe.

// Inside this block TypeScript narrows the type.




// Any check that helps TypeScript determine a more specific type = narrowing



/*
Common Ways Type Narrowing Happens:

1️⃣ typeof checks

2️⃣ instanceof

3️⃣ property checks

4️⃣ equality checks

5️⃣ discriminated unions
*/




// Literal Types
// A literal means an exact value, not a general type.

type Direction = "left" | "right" | "up" | "down";

let move: Direction = "left";
move = "up";
// move = "forward";  //error


type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";