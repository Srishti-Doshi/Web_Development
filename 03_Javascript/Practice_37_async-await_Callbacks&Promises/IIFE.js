function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 4000)
    });
}

// async function getAllData(){
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//     await getData(3);
// }

// getAllData();


//IIFE: Immediately Invoked Function Expressions

// (async function (){
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//     await getData(3);
// })();

(async ()=>{
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
})();