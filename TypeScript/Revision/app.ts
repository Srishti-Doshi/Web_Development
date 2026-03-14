let fruit: string = "Watermelon";
console.log(fruit);

function double(n: number): void {
  console.log(n + "=> double => " + 2 * n);
}

double(4);
double(10);
double(56);

class Person {
  sayhello(): void {
    console.log("Hello, good morning");
  }
}

let p1 = new Person();
p1.sayhello();

var str = "1";
var str2: number = <number>(<any>str);
console.log(typeof str2);

let a = 5;
console.log("value of a is " + a);

a = 6;

// const g:number;  //ERROR: must be initialized

const d: number = 100;
// d = 300;  //Error Cannot assign to d because it is a constant.

console.log("d = " + d);
console.log(`d = ${d}`);

let score = 10;

if (1) {
  let score = 20;
  console.log("inside if score = " + score); //20
}

console.log("outside if score = " + score); //10

let obj = {
  name: "sri",
  age: 18,
};
let key = "surname";
obj.name;
obj["name"];



let genObj : {[key: number]:string} = {};
genObj[1] = "apple";
genObj[10] = "banana";
console.log(genObj);


let answers: { [key: string]: any } = {};

function recordAnswer(Q_id: string, ans: any): void {
  answers[Q_id] = ans;
}

recordAnswer("q1", "paris");
recordAnswer("q2", 43);
recordAnswer("q3", true);

console.log("answers:" + answers); //answers:[object Object]
console.log(answers); //{ q1: 'paris', q2: 43, q3: true }

for (let key in answers) {
  console.log(`question: ${key} => answer; ${answers[key]}`);
}


/*



let id = Symbol("id");

let user = {
  name: "Srishti",
  [id]: 101,
};

// A Symbol is a unique and immutable primitive value used mainly as a unique key for object properties.

let s1 = Symbol("test");
let s2 = Symbol("test");

console.log(s1);
console.log(s2);
console.log(s1 === s2);

// Symbols are mainly used as object property keys that should be unique and not accidentally overwritten.

//A Symbol creates a key that no one else can accidentally match.




let empId = Symbol("eId");

let employee: {
  name: string;
  id: number;
  [empId]: number;
} = {
  name: "Srishti",
  id: 101,
  [empId]: 100,
};

//We use square brackets because the key is a variable.

employee.id = 102;
employee.id = 9902;
console.log(employee.id);

employee[empId] = 102;
console.log(employee[empId]);

// employee.salary = 4500;  // not allowed as need to define it already in type





let me: object = {
  name: "Srishti",
  age: 19,
};

console.log(me);



function processTransaction(
  amount: number,
  description: string,
  isCredit: Boolean,
) {
    if(amount<0){

    }
    if(!description){
        
    }
}

*/
/*
let internalId = Symbol("id");

function addMetadata(obj: any){
  obj[internalId]= "internal-library-id";
}

let employee:{
  name: string;
  id: number;
  [key: symbol] : string;
} ={
  name: "Srishti",
  id: 101,
};

addMetadata(employee);

console.log(employee.id);  
console.log(employee);
console.log(employee[internalId]);
*/

let patiendId: number[] = [1, 2, 3]
let caretakerId: Array<number> = [20, 3]

let vitalSign : [systolic:number, dystolic: number] = [100, 200];

let patientInfo: [string, number] = ["Sri", 56]




enum PatientStatus {Admitted, Discharged}
let pstatus: PatientStatus = PatientStatus.Admitted;


interface Shape{
  name: string,
  radius?: number,
}

let circle:Shape = {
  name: "red circle"
}



enum Role {
  DOCTOR,
  NURSE,
  ADMIN
}

interface Staff{
  id: number;
  name: string;
  role: Role 
}

let staffMembers: Staff[] = [
  {id: 1, name: "Sonia", role: Role.NURSE},
  {id: 53, name: "Srishti", role: Role.DOCTOR}
]

function staffDetails(obj: Staff):void{
  console.log(`Name: ${obj.name}, Role: ${obj.role}`);
}

for( let i of staffMembers){
  staffDetails(i);
}




function greet(name: string):void{
    console.log(`Name: ${name}`);
}

let result = greet("Prince");
console.log(greet("Puung"));
console.log(result);


//primitive alias
type RollNo = number;

//union
type pwd = number | string;

//object
type obj = {
  name: string;
  age?: number
}

// tuple
type product = [name: string, salary: number]
type course = [number,boolean]

//function
type func = (name:string, age:number) => void;

//generic 
function func<T>(value:T):T{
  return value;
}

console.log(func(34));

type Container<T> = {name: T, age : number}

let cont:Container<string> = {name:"sri", age:9}


type CustomerId = string;

type Customer = {id: CustomerId, name: string, email?: string};

type processOrder = (orderId: number, cb:(status:string)=>void)=>void

type Containerr<T> = {
  name : T;
}

let c:Containerr<string> = {name:"sri"}


function checkSign(num: number): void{
  if(num<0){
    console.log(`${num} is negative`);
  }
  else{
    console.log(`${num} is positive`);
    
  }
}

checkSign(1);
checkSign(-10);
checkSign(0);


function evenOrOdd(num: number):void{
  if(num % 2 == 0){
    console.log(`${num} is even`);
  }
  else{
    console.log(`${num} is odd`);
  }
}

evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(0);

function getGrade(num: number):void{
  if(num>=90){
    console.log("A");
  }
  else if(num>=80){
    console.log("B");
    
  }
  else if(num >= 70){
    console.log("C");
    
  }
  else if(num >= 60){
    console.log("D");
    
  }
  else{
    console.log("F");
    
  }
}

getGrade(100);
getGrade(90);
getGrade(16);

function provideFeedback(grade: string): void{
  switch (grade){
    case "A":
      console.log("Excellent !");
      break;
    case "B":
      console.log("Very Good")
      break;
    case "C":
      console.log("Good Work !");
      break;
    case "D":
      console.log("Good! Can so better !");
      break;
    case "E":
      console.log("Need Improvement !");
      break;
    default:
      console.log("You Failed the exam! Learn from your mistakes and do better");
      break;
  }
}

provideFeedback("A");
provideFeedback("C");
provideFeedback("F");



let add : (a: number, b: number) => number;
add = function(a:number, b: number){
  return a+b;
}

// type alias = nickname for a type

type calcy = (a:number, b: number) => number;

let sub:calcy;
sub = function(a:number, b:number){
  return a-b;
}

let multiply : calcy;
multiply = (a,b)=>a*b;




type mathOperation = (...nums:number[]) => number;

let addition : mathOperation;
// addition = (...nums) => nums.reduce((sum, n) => sum + n ,0);

addition = function(...nums:number[]){
  return nums.reduce((sum, n)=> sum + n, 0);
}


//function overloading

//function signatures
function concat(a:number, b:number):number
function concat(a:string, b:string):string
//one implementation
function concat(a:any, b: any){
  return a + b;
}

concat(2,3);
// concat(2,"3");
concat("2","3");
// concat(true,"3");
concat("hey","hello");
























function displayMember(member:string, email?:string):void{
  if(email){
    console.log(`Member name: ${member} email: ${email}`);    
  }
  else{
    console.log(`Member name: ${member}`);  
  }
}

displayMember("sri","sdgh")
displayMember("sri")


function calculateFines(...fines:number[]):number{
  return fines.reduce((sum,fine)=> sum + fine, 0)
}

console.log(calculateFines(5, 10, 2.5));


function calculateMembership(fee:number, dicountRate:number = 0.1): number{
  return fee - fee*dicountRate;
}

console.log(calculateMembership(100));
console.log(calculateMembership(100, 0.2));




function greetVisitor(visitor:string, formatter: (name: string)=>void):void{
  formatter(visitor);
}

const vipGreet = (name: string) => console.log(`Hello ${name}, Welcome at VIP`)


greetVisitor("Srishti",vipGreet);



function factorial(n:number):number{
  if(n <= 1){
    return 1;
  }
  return n*factorial(n-1);
}

factorial(2)
factorial(1)
factorial(4)



function parameterOrder(name:string, gender?:string, age:number = 18):void{
  if(gender){
    console.log(`Name: ${name}, Gender: ${gender}, Age: ${age}`);
  }
  else{
    console.log(`Name: ${name}, Age: ${age}`);    
  }
  
}

parameterOrder("Bob", undefined);



//Mapped types : "Take an existing type and transform its properties"


type User = {
  name: string
  age: number
}

type optionalUser = {
  [k in keyof User]? : User[k];
};