let a = prompt("Enter first number");
let b = prompt("Enter second number");

// let sum = a + b;  // prompt gives string

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);

try {
    // console.log("The sum is ", sum);
    console.log("The sum is ", sum * x);
} catch (error) {
    console.log('Error aa gaya bhai..');
}finally{
    console.log('files are closed and db is connection is being closed');
}

console.log('end');
