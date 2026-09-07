//json placeholder -> free fake rest API

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    // let data = await x.text();
    return data;  //returning a promise
}

async function main() {
    console.log("Loading Modules");
    console.log('Doing other tasks..');
    console.log("load data");
    // let data = await getData();
    let data = getData();
    console.log(data);
    console.log('process data');
    console.log('other task 2');
}

main();

//promise -> settle means resolve or reject
// resolve means promise has settled successfully
//reject means promise has not not settled successfully

