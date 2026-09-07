// IIFE -> make a function and immediately invoke it
//Immediately invoked functions expressions

async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep(); -> this gives error as await can only be used in async function
// let b = await sleep();

(async function main() {
    let a = await sleep();
    console.log(a);
    
    let b = await sleep(); 
    console.log(b);
    
})();


