// Any, Unkown, Void, Null, Undefined, Never

// any => by default type

let a;  //type any

a = 10;
a = "hello";



let x: any;
x = 20;
x = false;



let b: number;

b = 10;
// b = "hello" //error



let c = 12;
// c = "hello"; //error


let d:unknown;
d = 12;

d = "SRI";

if(typeof d === "string"){
    d.toLowerCase();
}

let e:any;
e = 12;
e = "PRI";

if (typeof e === "string"){
    e.toLowerCase();
}

let ab;
ab = 1;
ab = "ab";
ab.toLowerCase();

let abc: unknown;
abc = 12;
abc = "abc";
// abc.toLowerCase();   //error 

//the above thing is called type narrowing




//void
function abcd(){   //by default returns void
    console.log("hey");
}

// function xyz(): string{
//     console.log("hey");
// }

//error:A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.





//null => returns when the value asked for doesn't exist

let f = null; //any
let g:null;  //null

let h : null = null; //null

// let i : null = 23;  //error



//union
let j : string | null;
j = "pri";
j = null;
// j = 23;  //error




//undefined

let k: undefined;  //value not given




//never => never returns anything

// function infinite():never{
//     while(true);
// }

// infinite();

console.log("I will dull if function above me never returns");





// any  	    disables type checking
// unknown	    unknown but safe
// void     	function returns nothing
// null	        intentional empty value
// undefined	value not assigned
// never	    something that never occurs

// any → anything allowed
// unknown → unknown but check first
// void → nothing returned
// null → empty intentionally
// undefined → not assigned
// never → impossible / never returns

// Use any when you truly don’t know the type yet or while migrating JavaScript to TypeScript.

// Use unknown when you don't know the type but want safety.

// void — When a function returns nothing, Used for functions that only perform an action.

// undefined — When value hasn't been assigned yet, Used automatically by JavaScript.

let age: number | undefined ;

function greet(name?: string){
    console.log(name); 
}
// here name can be string or undefined


// never is a TypeScript type that means “this value can never exist.”
// It is used when a function never finishes normally or a situation should never happen.