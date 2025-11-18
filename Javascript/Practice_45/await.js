/*What does await do internally?

await pauses the async function,
but it does NOT pause JavaScript.

Meaning:
Only the async function body waits
But the rest of the program continues normally
JS is still single-threaded
The event loop keeps running
*/

async function demo(){
    console.log('1');
    let res = await Promise.resolve(2);
    console.log(res);
    console.log('3');  
}
demo();
console.log("4");

//async function always return a promise even if you return a normal value

async function f(){
    return 10;
}

console.log(f()); //Prints a promise
