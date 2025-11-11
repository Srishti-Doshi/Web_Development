function sum(a, b){
    console.log(a+b);
}


function calculator(a, b, sumCallback){
    sumCallback(a,b);
}

calculator(2, 4, sum); //No parenthesis with sum

calculator(4, 6, (a, b)=>{
    console.log(a + b);
});

const hello = ()=>{
    console.log("hello");
};

setTimeout(hello, 2000); // setTimeout takes callback -> hello