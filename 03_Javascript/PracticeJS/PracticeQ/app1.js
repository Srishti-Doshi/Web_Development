// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

const arrayAverage = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum / (arr.length);
}

console.log(arrayAverage([1, 2, 3, 4, 5, 6]));    //3


// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven = n => n % 2 == 0;

console.log(isEven(2));  //true
console.log(isEven(3));   //false


//What is the output of the following code :
const object = {
    message: 'Hello, World!',
    logMessage() {
        // console.log(this);  
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);  // undefined
// Here, we say Hey setTimeout, here is a function. Please execute it after 1000 milliseconds.  this == window

/*
Expression	            Meaning
object.logMessage      	Access the function
object.logMessage()	    Execute the function
*/

/* Output:  After a delay of 1 second, undefined is logged to the console.

While the setTimeout() function uses the object.logMessage as a callback, still, it
invokes object.logMessage as a regular function, rather than a method.

And during a regular function invocation this equals the global object, which is a
window in the case of the browser environment.
That's why console.log(this.message) inside logMessage method logs
window.message, which is undefined.
*/

// setTimeout(object.logMessage(), 2000);  // this == object


//What is the output of the following code :
let length = 4;
function callback(){
    console.log(this.length);  //this.length = window.length = 0
}

const obj = {
    length: 5,
    method(callback){
        callback();
    },
};

obj.method(callback);

// inside method this == obj  but inside callback  this == window as callback is a regular function

//Because window.length represents the number of frames in the window, not the variable length.

// Output = 0

callback();  // 0




//What wil be output?
const obj2 = {
    name: "Srishti",

    first() {
        console.log(this.name);

        function second() {
            console.log(this.name);
        }

        second();
    }
};

obj2.first();

/*
obj2.first() -> this = obj2
this.name = obj2.name = "Srishti"

second() → regular function call, so in a non-strict browser script, this = window

second() does not inherit this from first().
this.name = window.name = is normally an empty string ("")
*/