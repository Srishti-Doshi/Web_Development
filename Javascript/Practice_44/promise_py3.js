let p = new Promise((resolve, reject) => {
    resolve("success");
})

p.then(() => console.log('Then'));

/*When does .then() actually run?

.then() DOES NOT run immediately.
Instead:
✔ It schedules the callback to run in the microtask queue.
Meaning:
.then() callback ALWAYS runs after the current synchronous code finishes
even if the promise was already fulfilled
even if you resolved it immediately

Promise .then() callbacks always run asynchronously (microtasks), never synchronously.
*/

console.log('End');
