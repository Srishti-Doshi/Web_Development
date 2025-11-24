hello();

function hello(){
    console.log("hello");
}
/*hello -> ✅ declaration
✅ definition (function value)
✅ happens at the same moment
✅ hoisted fully (can be called before) */


sayHi();  //TypeError: sayHi is not a function

var sayHi = function(){
    console.log("Hi");
}


/*sayHi -> ✅ declaration (but only for the variable)
❌ function not created at declaration
✅ function assigned later
❌ cannot be called before assignment*/

//Function declarations are hoisted fully. Variable-held functions are not