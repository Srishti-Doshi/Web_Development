console.log('A');

setTimeout(() => {
    console.log('C');
}, 0)

Promise.resolve().then(() => {
    console.log('B');
});


console.log('D')

/*JAVASCRIPT EXECUTION ORDER

JavaScript runs tasks in this strict order:

1. Synchronous Code
Runs immediately

Example: variable assignments, function calls, console.log

2. Microtasks
Queued tasks that must run as soon as possible, before timers.

Includes:
.then() handlers
.catch() handlers
queueMicrotask()
MutationObserver callbacks

Promises use THIS queue.
Microtasks run right after all synchronous code, before any timer.

3. Macrotasks
Queued tasks that can wait.

Includes:
setTimeout
setInterval
I/O events
UI rendering
MessageChannel
These ALWAYS run after microtasks. */

/*WHY .then() IS ALWAYS ASYNC

Even if the Promise resolves instantly: .then() goes into the microtask queue, not the call stack.
*/

Promise.resolve().then(() => console.log("X"));
console.log("Y");

/*
The event loop is the system in JavaScript that decides what code runs now, and what code runs later.
The Event Loop has 3 main things:
1️⃣ Call Stack

→ Where synchronous code runs
→ Line-by-line execution

When JS calls a function:
It puts that function on top of the stack.
When the function finishes:
It removes it from the top.

function A() { console.log("A"); }
function B() { A(); console.log("B"); }
B();

Call stack behavior:
Push B
Inside B → push A
A finishes → pop A
B finishes → pop B

2️⃣ Microtask Queue

→ Promise .then(), .catch()
→ Runs immediately after the call stack

3️⃣ Macrotask Queue

→ setTimeout, setInterval, DOM events
→ Runs after microtasks 

The event loop constantly checks:

Is call stack empty? 
   → Yes → run microtasks
   → If microtasks empty → run macrotasks
*/



/*FACT

A Promise’s .then() callback never runs immediately.
It always waits until:

the entire call stack becomes empty.
*/