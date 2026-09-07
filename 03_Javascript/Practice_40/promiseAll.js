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

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Random number not supporting 2");
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done 2');
        }, 6000);
        resolve("success 2");
    }
});

let p3 = Promise.all([prom1, prom2]);

p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
});