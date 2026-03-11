//Function Declaration
/*
function add(a, b){
    return a + b;
}

//above typescript show a warning like 'any' type because any removes type safety.

add(4,5)  //work

add("hello", 5) //work

add(true, 6)     // work => strange results
*/


function div(a: number, b: number): number{
    return a/b
}

div(2, 3)

// TypeScript Safety
// div("hello", 4)     // fail





//Function Expression

const addition = function(a: number, b: number):number{
    return a+b;
}

// addition => variable
// function(...) => expression





//Arrow function 

const sub = (a: number, b: number) => {
    return a-b
}

//default parameters 
function power(n: number, p: number = 2){
    return n ** p
}

power(3)