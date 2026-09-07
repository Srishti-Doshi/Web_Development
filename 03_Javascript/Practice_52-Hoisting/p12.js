// let is hoisted, but not initialized

/**JavaScript remembers the variable name

but does NOT give it a value

until execution reaches the line where it is declared */


/** The result is something special — TDZ
Between:
the start of the scope
and
the line where let is declared

the variable is in:Temporal Dead Zone (TDZ)

During TDZ:
the variable exists
but accessing it causes ReferenceError*/

console.log(a);//ReferenceError
let a= 5;

/*
// creation phase
let a;   // hoisted, but NOT initialized (TDZ)

// execution phase
console.log(a);  // still in TDZ → ReferenceError
a = 5;           // initialized here
*/

//So unlike var, which becomes undefined, let stays unusable until the declaration line.


/*
Feature	                                 var                                	let
Hoisted	                                 ✅ Yes	                          ✅ Yes
Initialized during hoisting              ✅ Yes (undefined)	              ❌ No (TDZ)
Access before declaration                ✅ Allowed	                      ❌ ReferenceError
Scope                     	             Function/global	                Block
 */