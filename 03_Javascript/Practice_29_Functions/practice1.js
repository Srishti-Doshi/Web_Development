// Function

function add(a, b)
{
    sum = a+b;
    return sum
}

console.log(add(2, 3))


// Anonymous Function

a = function(c,d){
    return c+d;
}

console.log(a(2,3));


// Arrow Function

num = a => a + 5;

console.log(num(5));


abc = (n1, n2 ,n3) => {
    n1 = n1 + n2;
    n2 = n2 + n3;
    n3 = n3 + n1;
    return (n1 + n2 + n3);
}

console.log(abc(1,2,3));