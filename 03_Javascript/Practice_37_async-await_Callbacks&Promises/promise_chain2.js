function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 4000)
    });
}

//Promise Chain

/*
getData(1).then((res)=>{
    console.log(res);

    getData(2).then((res)=>{
        console.log(res);
    },3000);
});
*/


//Chain of dot then or Chain of promises

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })


console.log("getting data1....");
getData(1).then((res) => {
    console.log("getting data2....");
    return getData(2);
}).then((res) => {
    console.log("getting data3....");
    return getData(3);
}).then((res) => {
    console.log(res);
})