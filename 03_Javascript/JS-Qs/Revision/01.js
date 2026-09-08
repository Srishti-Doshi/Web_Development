// Javascript Revision

var a;
console.log(a);

a = 7;

var a = 10;

let c;
let b = 5;

b = 10;

// let b = 45;


// const a;

const d = 34;



//primitive data types

// Number
// BigInt
// null
// String
// undefined
// Symbol
// Boolean


let num = 55;
console.log(typeof(a));

//string is immutable
let str = "Prishti";
str = "Pri";
console.log(str);
console.log(typeof(str));

// str[2] = 'u';  immuatble -> notupdated
console.log(str[2]);


let num2 = BigInt(344);
console.log(typeof(num2));

console.log(0.1 + 0.2 !== 0.3);  //true



const bint = 45n;
console.log(typeof(bint));  //bigint

// JavaScript does not specify a fixed number of bytes for every primitive value.
// The ECMAScript specification defines their behavior/semantics, while the actual memory representation is an implementation detail of the JavaScript engine.

/*
null
 ↓
internal type tag = 000
 ↓
interpreted as "object"
 ↓
typeof null → "object"

backward-compatibility problems.


null is a primitive value, but typeof null returns "object" due to a historical legacy behavior in JavaScript.

*/
null instanceof Object //→ false

Boolean(0)       // false
Boolean(10)      // true
Boolean("")      // false
Boolean("hello") // true

// That leads into truthy/falsy,


// undefined -> Usually means that something has not been given a value.
// null represents an intentional absence of a value.


//Symbol

// A Symbol is a primitive value that is guaranteed to be unique.
const id = Symbol();

let s = Symbol();
let sy = Symbol("puung");   // sy => variable name,  puung => description of sy

console.log(s.description);
console.log(sy.description);

console.log(typeof(s));
console.log(typeof(sy));

console.log(sy instanceof Object);

let ab = 1;
let ba = true;

console.log(ab==ba);  // true    => checks only value
console.log(ab===ba);  //false   => checks both type and value

// symbols are useful particularly as object property keys where you want a unique key.

/*Objects are stored in heap and primitives are stored in stack."

That's an oversimplification.

A stronger answer is:

JavaScript distinguishes primitive values from objects at the language level. Variables can hold primitive values or references to objects; exact memory representation is an implementation detail of the JavaScript engine.
*/

let ag = "age";

let obj = {
    aname : "Sri",
    [ag] : 18,
    dob: 261126
}

console.log(ag);
console.log(obj.age);
console.log(obj.ag);

console.log(obj);
console.log(obj.aname);

obj.aname = "Pri";
console.log(obj);

//object => object, function, array

// string => immutable

delete obj.dob;
delete obj[ag];

console.log(obj);

/*
Dot notation vs bracket notation

If the key is known:

delete user.age;

If the key is stored in a variable:

const key = "age";

delete user[key]; */


const aid = Symbol("id");
const bid = Symbol("id");

let ob = {
    [aid] : "Pri",
    [bid] : "Sri",
}

console.log(ob);

//primitive values are assigned not refrenced
let myname = "Sri";
let yourname = myname;
yourname = "Pri";

console.log(myname);
console.log(yourname);

//objects are refrenced

let obj3 = {
    myname : "S",
    age : 18
}

let obj4 = obj3;

obj4.myname = "P";

console.log(obj3);

//const does not make the object immutable. It prevents reassignment of the binding

const user = {
    a : "apple",
    b : "banana",
};
// user = "Pri";   => error

let anotherUser = user;

anotherUser.a = "avacaodo";

anotherUser = {
    c : "cat"
}
console.log(user);
console.log(anotherUser);


// console.log({} === {}); // js compares object by referwnces not by values

const a1 = {};
const b1 = a1;

console.log(a1 === b1);  //true Because both refer to the same object.


//function refefrences
// Functions are objects too.

function hello(a){
    a++
    console.log("hello");
}

const a2 = hello;
const b2 = hello;

console.log(a2 === b2); //Both variables refer to the same function object.

const a3 = hello(2);
const b3 = hello(3);

console.log(a3 === b3);  //true

const a4 = function () {};
const b4 = function () {};

console.log(a4 === b4);  //false  => Two different function objects.

// JavaScript is pass-by-value. When the value is an object, that value is a reference to the object.

const nme = {
    nm : "Sri"
};

let anme = nme;

anme = {
    nmes : "Pri"
};

// The classic interview trap  Look carefully:

function change(obj) {
    obj = {
        name: "Alex"
    };
}

const urser = {
    name: "Prince"
};

change(urser);

console.log(urser.name);

// You changed the local parameter binding.
// You did not change what user refers to.


// object spread operator and shallow copy

const original = {
    name : "P",
    age : 22
}

const copy_obj = {...original};

console.log(original === copy_obj);
/**
 
copy_obj = {
    name : original.name,
    age : original.age
}

 */

console.log(copy_obj);

copy_obj.name = "S";

console.log(original);  //{ name: 'P', age: 22 }

console.log(copy_obj);  //{ name: 'S', age: 22 }


const obj11 = {
    arr : [2,4,6,8],
    myname : "T"
}

const obj12 = {
    ...obj11
}

obj12.arr[1] = 14;

console.log(obj11);
console.log(obj12);

//Create a new object and copy the top-level enumerable own properties into it.
//spread is only a shallow copy



const obj13 = Object.assign({}, obj11);
console.log(obj13);


let arr2 = [1,2,3,4];
let arr3 = [...arr2];
let arr4 = arr2.slice();

console.log(arr4)


// === means strict equality.
// console.log({}==={});  // false, js compares by reference not values


// == loose equality => can perform "type coercion"
console.log({}=={}); //false
console.log({n:1}=={n:1}); //false

console.log(0==false) //true
console.log(0===false) // false

console.log(null==undefined) //true
console.log(null===undefined) // false

console.log(typeof("42"-2));//implicit coercion
console.log(typeof("42"+2));//implicit coercion
console.log(Number("55"));//emplicit coercion

