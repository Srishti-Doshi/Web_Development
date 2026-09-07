const getPromise = () =>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        resolve("success");
        // reject("Errrrorr");
    });
};

let promise = getPromise();

promise.then(()=>{
    console.log("promise fullfilled");
});

promise.then((res)=>{
    console.log("promise fullfilled", res);
});

promise.catch(()=>{
    console.log("Promise rejected");
});

promise.catch((err)=>{
    console.log("Promise rejected",err);
});

// here res -> result  and err -> error are parameters and comes automatically