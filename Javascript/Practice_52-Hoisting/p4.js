/*let and const — TDZ (Temporal Dead Zone)

let/const are block-scoped.

Their bindings are created at creation phase but not initialized. Accessing them before the declaration throws a ReferenceError.

This period between the start of the scope and the declaration is the TDZ. */

console.log(x); //ReferenceError: Cannot access 'x' before initialization

let x = 10;


const y = 1;
y = 2;  // TypeError: Assignment to constant variable

/*Why TDZ exists: prevents use of variables before a clear initialization and helps avoid the silent undefined problem var has. */
