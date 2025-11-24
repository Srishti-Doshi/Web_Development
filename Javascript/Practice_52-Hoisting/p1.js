// Hoisting -> Hoisting refers to the process whereby the interprefer appears to move the declarations to the top of the code before execution.

//Variables can thus be referenced before they are declared in JavaScript

// this works only for variable declared using var


hello("tinka");  //will work as function will move up

function hello(name){
    console.log(name); 
}

sleep("Kusum");

let sleep = (name)=>{
    console.log(name, "is sleeping");
}

// this won't work if function is made using let and const


//Inmportant Note: JavaScript only hoists declarations, not initializations. The variable will be undefined until the line where its initialized is reached