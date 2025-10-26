//Functions in Javascript

function fun(name) {
    console.log(name + " is a B.Tech Student.")
    console.log(name + " enjoys coding very much.")
    console.log(name + " is a web developer.")
}

fun("Srishti")
fun("Prince")

function sum(a, b, c=4)
{
    console.log(a+b+c)
}

sum(2) // (NaN -> Not a number) undefined
sum(2,3)
sum(2,3,1)
sum(3.1,3)
sum(2,3.445)
sum(5.5,6.7)
sum("Sr",7)
sum("S", "D")

function add(x,y)
{
    return x+y
}

result = add(4,5)
console.log("addition of x and y is ",result)
console.log("addition of x and y is ",add(6,6))


const func1 = (x) =>{
    console.log("I am an arrow function",x)
}

func1(22)
func1(56)
func1(878)