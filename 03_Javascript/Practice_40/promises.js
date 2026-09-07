console.log('Promises:');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Random number not supporting");
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done');
        }, 6000);
        resolve("success");
    }
});

prom1.then((a) => {
    console.log(a)
    console.log('I am then');
}).catch((err) => {
    console.log(err);
    console.log('I am catch');
});

//We generally wait for network requests

// .then() runs only when the promise is resolved
// .catch() runs only when the promise is rejected