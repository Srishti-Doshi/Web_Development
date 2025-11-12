// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data : ", dataId);
//     }, 2000)
// };

// getData(1);
// getData(2);
// getData(3);


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data : ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
};

// getData(1, getData(2));  -> because of parenthesis it will execute automatically  , Do not use this -> error

// getData(1, () => {
//     getData(2);
// });


// getData(1, () => {
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });

getData(10, () => {
    console.log("getting data 20...");
    getData(20, ()=>{
        console.log("getting data 30...");
        getData(30, ()=>{
            console.log("getting data 40...");
            getData(40);
        });
    });
});