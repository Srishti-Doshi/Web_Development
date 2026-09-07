/*
Function overloading means:

Same function name
Different parameter types or counts

TypeScript allows us to define multiple function signatures for the same function.
*/


function add(a: number, b: number): number  //Overload signature
function add(a: string, b: string): string  //Overload signature
function add(a: any, b: any){
    return a+b
}

// Overload signatures
//         ↓
// Single implementation


// add(number,number)
// add(string,string)
//         ↓
// actual function


//Calls must match one of the overload signatures
//TypeScript only checks calls against the overload signatures, not the implementation.

add(2,3)  // works
add("Good", "Night")  //works
// add(2, "hello") //ERROR: No overload matches this call  
// add(true, false) //ERROR



function print(a:number, b: number): void
function print(a:string, b: string): void
function print(a: any, b: any){
    console.log(a)
}

print(2,3)

// Overload signature → return type required
// Implementation     → return type optional


// Overload signature → no body → return type required
// Implementation     → has body → return type can be inferred

// Overload signatures → define allowed calls
// Implementation      → must support all those cases




// Overloading allows TypeScript to connect inputs with outputs.

// input types → determine return type

/*
Use case
1️⃣ different argument counts
2️⃣ different argument types
3️⃣ return type depends on input
*/