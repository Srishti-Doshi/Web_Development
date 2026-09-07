function order_tea(){
    console.log('tea is ready'); 
    get_biscuits(); //this is where the callback is actually executed
}

function get_biscuits(){
    console.log('get biscuits');
}
function get_samosa(){
    console.log('get biscuits');
}
function get_bill(){
    console.log('get bill');
}
function pay_online(){
    console.log('pay online');
}
function get_confirmed(){
    console.log('confirmed');
}

//order_tea(get_biscuits());// calling the function (not a callback)

order_tea(get_biscuits)//here we are ONLY passing the function
get_biscuits(get_samosa)


/*A callback simply means:
A function that you PASS into another function
so that the other function can CALL IT LATER. */

/*✔ Named functions can absolutely be callbacks.
✔ Anonymous functions can also be callbacks.
✔ Anything passed as a function → is a callback */

//So the callback runs inside the main function, not where we pass it