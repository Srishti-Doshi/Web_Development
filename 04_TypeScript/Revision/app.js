var fruit = "Watermelon";
console.log(fruit);
function double(n) {
    console.log(n + "=> double => " + 2 * n);
}
double(4);
double(10);
double(56);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayhello = function () {
        console.log("Hello, good morning");
    };
    return Person;
}());
var p1 = new Person();
p1.sayhello();
var str = "1";
var str2 = str;
console.log(typeof str2);
var a = 5;
console.log("value of a is " + a);
a = 6;
// const g:number;  //ERROR: must be initialized
var d = 100;
// d = 300;  //Error Cannot assign to d because it is a constant.
console.log("d = " + d);
console.log("d = ".concat(d));
var score = 10;
if (1) {
    var score_1 = 20;
    console.log("inside if score = " + score_1); //20
}
console.log("outside if score = " + score); //10
var obj = {
    name: "sri",
    age: 18,
};
var key = "surname";
obj.name;
obj["name"];
var genObj = {};
genObj[1] = "apple";
genObj[10] = "banana";
console.log(genObj);
var answers = {};
function recordAnswer(Q_id, ans) {
    answers[Q_id] = ans;
}
recordAnswer("q1", "paris");
recordAnswer("q2", 43);
recordAnswer("q3", true);
console.log("answers:" + answers); //answers:[object Object]
console.log(answers); //{ q1: 'paris', q2: 43, q3: true }
for (var key_1 in answers) {
    console.log("question: ".concat(key_1, " => answer; ").concat(answers[key_1]));
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
var patiendId = [1, 2, 3];
var caretakerId = [20, 3];
var vitalSign = [100, 200];
var patientInfo = ["Sri", 56];
var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["Admitted"] = 0] = "Admitted";
    PatientStatus[PatientStatus["Discharged"] = 1] = "Discharged";
})(PatientStatus || (PatientStatus = {}));
var pstatus = PatientStatus.Admitted;
var circle = {
    name: "red circle"
};
var Role;
(function (Role) {
    Role[Role["DOCTOR"] = 0] = "DOCTOR";
    Role[Role["NURSE"] = 1] = "NURSE";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
var staffMembers = [
    { id: 1, name: "Sonia", role: Role.NURSE },
    { id: 53, name: "Srishti", role: Role.DOCTOR }
];
function staffDetails(obj) {
    console.log("Name: ".concat(obj.name, ", Role: ").concat(obj.role));
}
for (var _i = 0, staffMembers_1 = staffMembers; _i < staffMembers_1.length; _i++) {
    var i = staffMembers_1[_i];
    staffDetails(i);
}
function greet(name) {
    console.log("Name: ".concat(name));
}
var result = greet("Prince");
console.log(greet("Puung"));
console.log(result);
//generic 
function func(value) {
    return value;
}
console.log(func(34));
var cont = { name: "sri", age: 9 };
var c = { name: "sri" };
function checkSign(num) {
    if (num < 0) {
        console.log("".concat(num, " is negative"));
    }
    else {
        console.log("".concat(num, " is positive"));
    }
}
checkSign(1);
checkSign(-10);
checkSign(0);
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("".concat(num, " is even"));
    }
    else {
        console.log("".concat(num, " is odd"));
    }
}
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(0);
function getGrade(num) {
    if (num >= 90) {
        console.log("A");
    }
    else if (num >= 80) {
        console.log("B");
    }
    else if (num >= 70) {
        console.log("C");
    }
    else if (num >= 60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}
getGrade(100);
getGrade(90);
getGrade(16);
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent !");
            break;
        case "B":
            console.log("Very Good");
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
var add;
add = function (a, b) {
    return a + b;
};
var sub;
sub = function (a, b) {
    return a - b;
};
var multiply;
multiply = function (a, b) { return a * b; };
var addition;
// addition = (...nums) => nums.reduce((sum, n) => sum + n ,0);
addition = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (sum, n) { return sum + n; }, 0);
};
//one implementation
function concat(a, b) {
    return a + b;
}
concat(2, 3);
// concat(2,"3");
concat("2", "3");
// concat(true,"3");
concat("hey", "hello");
function displayMember(member, email) {
    if (email) {
        console.log("Member name: ".concat(member, " email: ").concat(email));
    }
    else {
        console.log("Member name: ".concat(member));
    }
}
displayMember("sri", "sdgh");
displayMember("sri");
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    return fines.reduce(function (sum, fine) { return sum + fine; }, 0);
}
console.log(calculateFines(5, 10, 2.5));
function calculateMembership(fee, dicountRate) {
    if (dicountRate === void 0) { dicountRate = 0.1; }
    return fee - fee * dicountRate;
}
console.log(calculateMembership(100));
console.log(calculateMembership(100, 0.2));
function greetVisitor(visitor, formatter) {
    formatter(visitor);
}
var vipGreet = function (name) { return console.log("Hello ".concat(name, ", Welcome at VIP")); };
greetVisitor("Srishti", vipGreet);
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorial(2);
factorial(1);
factorial(4);
function parameterOrder(name, gender, age) {
    if (age === void 0) { age = 18; }
    if (gender) {
        console.log("Name: ".concat(name, ", Gender: ").concat(gender, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
}
parameterOrder("Bob", undefined);
