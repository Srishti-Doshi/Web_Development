/*Hoisting inside functions (and closures)

Bindings are created per scope (each function has its own creation phase). var inside a function is hoisted to top of that function. */

for(var i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i);       
    },0)
}

// prints: 3 3 3  (because single function-scoped 'i' ends up 3)

for (let i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i);
    },0)
}

// prints: 0 1 2 (each iteration has its own block-scoped 'i')


//Hoisting means declarations are registered before code runs. var and function declarations are hoisted and usable early (but var will be undefined until its assignment), while let, const, and class are hoisted as uninitialized bindings and are in the Temporal Dead Zone until the declaration executes — accessing them early throws ReferenceError. Prefer let/const and don’t rely on hoisting for program logic.