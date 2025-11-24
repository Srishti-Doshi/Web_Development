/*var hoisting —

var is function-scoped (or global if outside functions).

Declarations are hoisted and initialized to undefined.

You can reference a var before its line of declaration — it won’t error, but value is undefined. */

console.log(a); // undefined (not Refernce error)

var a = 5;

console.log(a);

