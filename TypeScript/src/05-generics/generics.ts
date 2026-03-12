//The Problem Generics Solve

function identity(value : any){
    return value
}

let result = identity(5)  // result -> any
identity("hello")
identity(true)

// since we used any typescript loses typesafety

result.toUpperCase()  // works but result is actually a number

// So we want that if we pass a number:  identity(5) -> number  i.e input type = output type

identity("hey") // => string





//Generic

/*A generic is simply a placeholder for a type.

Instead of writing a function for one specific type, we make it work for many types while keeping type safety.*/

//a function that works with many types while preserving the type information


// We introduce a type parameter

function myIdentity<T>(value: T): T {
    return value
}

// Now T represents a type placeholder

/*whatever type goes in
the same type comes out*/


let result2 = myIdentity(5) // T -> number
myIdentity("hi") // T -> string

// result2.toUpperCase()  // does not works : WARNING

result2.toString() //works














// hum ek function ko use karte bata sakte hai ki function argument ko kis type se treat kare


// T => Template (Template classes)

function buy<T>(a:T){

}

buy<string>("hello")  // T-> string
buy("hello") // TS infer T -> string



function play<P>(x:P){

}

play<number>(2)  // explicit generic P -> number
play(2)  //TS infer  P -> number




function buffet<T>(a: T, b: number){ }
buffet<string>("halwa", 4)



function log<T>(val: T){
    console.log(val);
}

log(12);

log("puuung")



// "hey" => type string => value string literal

function fun<T>(a: T, b: T): T {
    return "hey" as T;  //assertion
    // return "hey";  
}

fun<string>("hey", "hello");