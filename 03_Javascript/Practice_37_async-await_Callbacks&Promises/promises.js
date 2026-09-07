let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");

    // In console run "promise" and see its state
    //by default state: pending

    resolve("success"); //function created by js

    // resolve(123);

// output: Promise {
    //     <fulfilled>: 123}
    //         [[Prototype]]
    //         :
    //         Promise
    //         [[PromiseState]]
    //         :
    //         "fulfilled"
    //         [[PromiseResult]]
    //         :
    //         123

    // reject("error");
    //promises.js:23 Uncaught (in promise) error

    reject(123);
    //Uncaught (in promise) 123
});

function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            // resolve("success");
            reject("error");
            if(getNextData){
                getNextData();
            }
        }, 8000)
    });
}

let finalValue = getData(123);  // -> returns a promise before 8 seconds it says pending and later fullfilled  (check in console).