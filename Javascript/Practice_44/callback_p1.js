/*A callback is simply a function you pass into another function so it can be called later. Callbacks let code run after something else finishes (useful for asynchronous tasks like timers, network requests, or reading files).*/

function make_tea(cb) {
    console.log('preparing tea...');
    cb();
};

// make_tea(function(){
//     console.log('tea is ready');   
// });

make_tea(()=>{
    console.log('tea is ready');
});

/*makeTea → normal function
It accepts another function (cb) as a parameter
Inside makeTea, we do some work (like preparing tea)
After work done → we run cb()
When we call makeTea(...) we pass an anonymous function that prints "Tea is ready!"
That anonymous function is the callback. */

/*A callback is:
“A function you give to another function so it can call you back later.” */