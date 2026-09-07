/* Types of scopes in js:

1. Global Scope
A variable is in global scope if it is defined outside any function or block.
Accessible from anywhere in the program.
*/

let a = 10; //global-scoped

function test1(){
    console.log(a); // cn access
}

console.log(a); // can access


/*2. Function Scope
A variable is in function scope if it is defined inside a function.
Cannot be accessed outside the function. */

function test2(){
    let b = 20; // function-scoped
    console.log(b); // accessible here
}

test2();

// console.log(b); // Error: b is not defined

//var is always function-scoped, even if inside a block.

/*3. Block Scope
A variable is in block scope if it is defined inside { }.

✅ Applies to let and const
❌ Does NOT apply to var */

{
    let c = 30;
    const d = 100;
    var e = 6000;
}

// console.log(c); // not accessible
// console.log(d);  // not accessible
console.log(e); // accessible (because var ignores block)
 


/*4. Local Scope
This simply means:
👉 variables available only inside a specific area, such as
✅ inside a function (function scope)
✅ inside a block (block scope)
So local scope = function scope + block scope */

function test3() {
    let x = 100; // local to function
    if (true) {
        let y = 200; // local to block
    }
}


/*
Scope Type  ->	Where defined                ->	Accessible where
Global      ->	Outside everything           ->	Everywhere
Function    ->	Inside a function            ->	Only inside that function
Block       ->	Inside { }, using let/const  ->	Only inside that block
Local       ->	Any non-global scope         ->	Only within its boundary


var    ->	function-scoped
let    ->	block-scoped
const  ->	block-scoped
 */