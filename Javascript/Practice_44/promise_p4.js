function order_tea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Here is your tea');
            resolve();
        }, 1000);
    });
}
/*We don’t pass a callback
We return a Promise
Inside the Promise we call resolve() when the task is done */

function get_biscuits() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('get biscuits');
            resolve();
        }, 1000);
    });
}

function get_samosa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('get samosa');
            resolve();
        }, 1000);
    })
}

function pay_online() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('pay online');
            resolve();
        }, 1000);
    })
}

function get_confirmed() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('confirmed');
            resolve();
        }, 1000)
    })
}

//order_tea().then(get_biscuits).then(get_samosa).then(pay_online).then(get_confirmed).then(()=>console.log('all done')).catch((err)=>console.log("Error: ",err));

order_tea()
    .then(get_biscuits)
    .then(get_samosa)
    .then(pay_online)
    .then(get_confirmed)
    .then(() => console.log("All tasks done!"))
    .catch((err) => console.log("Error:", err));


/*No nesting
✔ No pyramid shape
✔ Straight, linear flow
✔ Error handled in one place */

/*Why .then(getBiscuits) works?
Because JavaScript sees it as:

orderTea().then(() => getBiscuits()); 

You are not calling getBiscuits.
You are passing the function.
Promise system calls it when needed.*/


/*Why Promises Exist?
Because callbacks become messy when:
tasks depend on each other
you keep nesting callbacks
code looks like a pyramid

Promises fix this by making the flow look straight:

Promises actually avoid callback hell*/

/*Promises solve callback hell Because they use .then() chaining instead of nesting*/

/*Promises don't make code faster.
They only make asynchronous code more organized.

Promises are ALWAYS asynchronous
(handlers go to the microtask queue)

They don't run immediately.

setTimeout is only used to simulate delay.
Promises have nothing to do with setTimeout.
They do not replace it.*/