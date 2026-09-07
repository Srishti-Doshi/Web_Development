//async functions always return a Promise,and await is just a nicer way of writing .then().

function order_tea(){
    console.log('tea is ready'); 
}

function get_biscuits(){
    console.log('get biscuits');
}
function get_samosa(){
    console.log('get samosa');
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

async function order(){
    try{
        await order_tea();
        await get_biscuits();
        await get_samosa();
        await get_bill();
        await pay_online();
        await get_confirmed();
    }catch(err){
        console.log(err);
    }
}

// async function order(){
//     await order_tea();
//     await get_biscuits();
//     await get_samosa();
//     await get_bill();
//     await pay_online();
//     await get_confirmed();
// }

order();