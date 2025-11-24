let x = 5;

function outer() {
    function inner() {
        console.log(x);
    }
    let x = 10;
    inner();
}

outer();
