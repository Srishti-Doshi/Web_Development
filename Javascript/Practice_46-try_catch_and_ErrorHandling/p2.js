let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);

function main() {
    try {2
        console.log("The sum is ", sum*x);
        // return true;

    } catch (error) {
        console.log('Error aa gaya bhai..');
        return false;

    } finally {
        console.log('files are closed and db is connection is being closed');
    }
    console.log("END");
}

let c = main()
console.log('final end');
