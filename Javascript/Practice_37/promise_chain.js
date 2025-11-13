//Promise Chaining

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        }, 4000);
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        }, 4000);
    })
}

/*
console.log("Fetching Data1.....");

let p1 = asyncFunc1();

p1.then((res)=>{
    console.log(res);
})

console.log("Fetching Data2.....");

let p2 = asyncFunc2();

p2.then((res)=>{
    console.log(res);
})
*/

//Here both data1 and data2 -> fetching together and we want that data2 should be fetched after data1 -> we can use chaining

console.log("Fetching Data1.....");

let p1 = asyncFunc1();

p1.then((res)=>{
    console.log(res);
    console.log("Fetching Data2.....");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
});

//Simpler
/*
console.log("Fetching Data1.....");

asyncFunc1().then((res)=>{
    console.log("Fetching Data2.....");
    asyncFunc2().then((res)=>{});
});
*/