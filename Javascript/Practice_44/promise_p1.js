let promise = new Promise((resolve, reject) => {
    let foodReady = false;
    if (foodReady) {
        resolve("Food is ready!!");
    }
    else {
        reject("Food was not prepared.")
    }
});

// To use the promise

promise.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err)
})

/*
promise.then((msg)=>{
    console.log(msg);
});

promise.catch((err)=>{
    console.log(err);
});

here above Attaches .catch() too late sometimes → rejection is missed. => chaining (recommended)
*/


/*Promise settled synchronously → reactions queued as microtasks.

.then / .catch callbacks are always executed later (async), never inline. */