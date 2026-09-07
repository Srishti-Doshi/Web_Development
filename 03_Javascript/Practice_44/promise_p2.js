//What happens the moment you write new Promise()?

let p = new Promise((resolve, reject) => { });

/*Two things happen immediately (synchronously)

1. A Promise object is created
Internally it looks like:

state: "pending"
result: undefined

2. The executor function runs immediately
The function you pass:

(resolve, reject) => {}
*/

let p2 = new Promise((resolve) => {
    resolve("hello");
})

/*What does resolve() actually do?

inside a promise, when you call:
resolve("hello");
It performs exactly two internal actions: 
state: "fulfilled"
result: "hello"  -> stores the resolved value

Calling resolve() does NOT run .then() immediately.
It only changes state + stores value.
*/