//What happens when you return a value inside .then()?

//Whatever you return inside a .then() becomes the resolved value of the next Promise in the chain.

Promise.resolve(10)
    .then(x => {
        return x + 5;
    })
    .then(y => console.log(y));

/**The Promise object has:
state (“pending”, “fulfilled”, “rejected”)
value (the resolved/rejected value)
reactions (.then(), .catch() handlers)
A Promise object is what actually represents async work. */

//What happens when you return a Promise inside .then()?
//If you return a Promise inside a .then() callback,the next .then() in the chain waits for that Promise to finish.

Promise.resolve(10)
    .then(x => {
        return Promise.resolve(x + 10);
    })
    .then(y => console.log(y));

//What happens when you throw an error inside .then()?
//Throwing an error inside .then() is the same as returning a rejected Promise.

Promise.resolve(10)
    .then(x => {
        throw "boom! errorrrr";
    })
    .catch(err => console.log(err));

/*Output order 
15
boom! errorrrr
20
Because .then() and .catch() from different Promise chains interleave in the microtask queue, not run one full chain at a time.
1: then of chain1
2: then of chain2
3: then of chain3  → error happens here
4: print of chain1
5: print of chain2
6: print of chain3 error*/