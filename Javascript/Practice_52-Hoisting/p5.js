/* Function declarations vs function expressions

Function declaration (hoisted fully — binding initialized to function):

Function declarations are available anywhere in the scope because the binding gets the function at creation phase.
*/

//console.log(sum(2,3));

function sum(a, b){
    return a+b;
}

/*Function expression assigned to var: */

//console.log(g);  //undefined
//console.log(g()); //TypeError: g is not a function
var g = function(){
    return "sonu";
}

/*Here g is hoisted as undefined (like other vars). Trying to call g() before the assignment causes TypeError (trying to call undefined).*/


//Function expression assigned to let/const:
//console.log(h); //ReferenceError(TDZ)
const h = function(){
    return 1;
}
//Because const binding is in TDZ until declaration.

//Arrow function assigned to const

console.log(af()); //ReferenceError
const af = ()=>{
    return  2;
}
