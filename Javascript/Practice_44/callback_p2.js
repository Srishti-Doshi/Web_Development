/*Suppose:
You need to do tasks one after another, like:
Order tea
After tea, get biscuits
After biscuits, get samosa
After samosa, get bill
After bill, pay online
After payment, get confirmation
Each step depends on the previous one. */

function order_tea(next) {
    setTimeout(() => {
        console.log('Here is your tea');
        next();
    }, 1000);
};

function get_biscuits(next) {
    setTimeout(() => {
        console.log('get biscuits');
        next();
    }, 1000);
}

function get_samosa(next) {
    setTimeout(() => {
        console.log('get samosa');
        next();
    }, 1000);
}

function get_bill(next) {
    setTimeout(() => {
        console.log('get bill');
        next();
    }, 1000);
}

function pay_online(next) {
    setTimeout(() => {
        console.log('pay online');
        next();
    }, 1000);
}

function get_confirmed(next) {
    setTimeout(() => {
        console.log('confirmed');
        next && next(); //only if next exists -> if(next){next();};
    }, 1000);
}

/* 
order_tea(function () {
    get_biscuits(function () {
        get_samosa(function () {
            pay_online(function () {
                get_confirmed(function () {
                    console.log('All tasks done');
                });
            });
        });
    });
});
*/

order_tea(()=>{
    get_biscuits(()=>{
        get_samosa(()=>{
            get_bill(()=>{
                get_confirmed();
            });
        });
    });
});

/*Callback Hell
Callback hell means too many callbacks nested inside each other, making code very difficult to read and manage.

(Also called Pyramid of Doom)
it is difficult to read
It goes inside too many brackets
ard to manage errors */