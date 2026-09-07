//Simulate getting data from a server

/*function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(435);
        }, 3500)
    });
};

console.log("Loading Modules");

console.log('Doing other tasks..');

console.log("load data");
let data = getData();

data.then((v)=>{
    console.log("data");
    console.log('process data');
    console.log('other task 2');
});
*/

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(435);
        }, 3500)
    });
};

async function main() {
    console.log("Loading Modules");

    console.log('Doing other tasks..');

    console.log("load data");
    let data = await getData();

    console.log("data");
    console.log('process data');
    console.log('other task 2');
}

main();

