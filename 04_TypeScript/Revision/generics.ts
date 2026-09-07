function identity<T>(value: T):T{
    return value;
}

console.log(identity("hello"));
console.log(identity<number>(4));
console.log(identity(true));


function identityy(value: any): any{
    return value;
}

console.log(identityy("hello hey"));
console.log(identityy(44));
console.log(identityy(false));


class Box<T>{
    constructor(public value:T){
        this.value = value;
    }
}

interface ApiResponse<T>{
    data: T;
    staus: number;
}

type pair<K, V> = {key: K, value:V};

let p1: pair<string, number> = {
    key: "apple",
    value : 9
}


interface hasId{
    id:string
}

function printId<T extends hasId>(item: T):void{
    console.log(item.id);
}

printId({id: "name"});
printId({id: "name", num: 5});

const merge = <A, B,>(a: A, b: B): A & B => {
  return { ...a, ...b };
};

const merged = merge({id:1}, {name:"sri"});
console.log(merged);


type User = {
    name: string;
    age: number;
    gender: string;
    isStudent: boolean;
}

let u1: User = {name: "Sonu", age: 40, gender:"F", isStudent:true};
let u2: Partial<User> = {name: "sri"};
let u3: Partial<User> = {age: 7, gender: "F"}
u3.age = 9;
let u4: Partial<User> = {}


let u5: Readonly<User> = {name: "Sonu", age: 40, gender:"F", isStudent:true};

// u5.age = 67;  //error

// record<K,V>    K => types of keys  , V => types of values
let scores: Record<string , number> = {
    math: 90,
    physics: 85
}


//Pick<T, K>  => T=> Type   K=> porperties
let u6 : Pick<User, "name"|"age"> = {   // this picks name, email
    name : "monu",  
    age: 18
}



type newUser = Omit<User , "age"|"gender">;

let u7: newUser = {
    name: "a",
    isStudent: true,
    // age: 6,
}


type requiredUserDetails = Required<User>;
let u8:requiredUserDetails ={
    name: "manav",
    age: 6,
    gender: "M",
    isStudent: true,
}
/*

Utility	              Meaning
Partial<T>	          All properties optional
Readonly<T>	          Cannot modify properties
Record<K, T>	      Key-value object
Pick<T, K>	          Select some properties
Omit<T, K>            Remove some properties

*/



interface Rules{
    name: string;
    age: number;
    gender: string;
}

interface PartialRules extends Partial<Rules>{}

interface PickRules extends Pick<Rules, "name" | "age">{
    email: string;
}

interface omitRules extends Omit<Rules, "gender">{}