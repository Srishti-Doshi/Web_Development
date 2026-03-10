// Type Inference

let a = 10; // inference means seeing the value variable got to know about type

// Type Annotations
let b: number;
let c: number | boolean;
function abcd(a: number, b: string): void {}

// Interfaces and type Aliases

// interface => shape of object
// types => user defined types create

function ab(a:number, b:string){
    a.toFixed
    a.toExponential
    b.replace
    b.split
}

/*
function getDataOfUser(obj){
    obj.
}
*/

// Defining interfaces

interface User{
    name: string,
    email: string,
    password: number,
    gender?: string     //optional
}

// Using interfaces to define object shapes

function getDataOfUser(obj: User){
    obj.name;
    //interface defines how obj looks
}

getDataOfUser({name: "sri", email: "s@gmail.com", password: 123, gender: "f"});

getDataOfUser({name: "sri", email: "s@gmail.com", password: 123});

// getDataOfUser({name: "sri", password: 123}); //error

function getData(obj:Object){
    //but this doesn't tell what's inside the obj
}

// Extending Interfaces
interface Normal_user{
    name: string;
    email: string;
    password: string;
}

interface Admin extends Normal_user{
    admin: boolean;
}

function login(obj: Admin){
    obj.email
    obj.admin
}


//interfaces with same name will get merge not overwriting 

interface course {
    name: string;
}

interface course {
    duration: number;
}

function details (obj: course){
    obj.duration;
    obj.name;
}

details({name: "B.Tech", duration: 4});
// details({name: "BBA"});  //error






// Type Aliases

type sankhya = number;

let s: sankhya;
s = 234;


type value = number | boolean | null;
let score = 34;
// score = true; //error


type status = string | boolean | null;
let result: status = true;
result = "pass";


type car_type = string | null;

function car (obj : car_type){

}

car("nano");
// car(true)  //error



// Intersection Types

let marks : number | boolean;  //Union => either number or boolean

type Person = {
    name : string,
    email : string,
}

type engineer = Person & {
    getCoder(promgramming: string):void
}

function aa(a:engineer){
    a.email
}


// type custom = boolean ;
// type custom = string;      //error