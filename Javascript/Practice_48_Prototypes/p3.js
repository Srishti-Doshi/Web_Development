// all the objects in js bacically inherit general properties from its default prototype

// We can create our own prototypes too

const employee = {
    calcTax(){
        console.log('tax rate is 10%');     
    },

    calcTax2 : function(){
        return "I am calcTax2";
    },
};

console.log(employee.calcTax()); // since there is no return value js automatically returns undefined

console.log(employee.calcTax2());


const karanArjun = {
    salary: 5000,
    calcTax(){
        console.log('tax rate is 20%');       
    }
};

//Now we can write employee as a prototype and can use its properties and methods in karanarjun

karanArjun.__proto__ = employee; // now karanArjun has calcTax method too in its one more prototype other than default one

karanArjun.calcTax();  // when an object and its prototype both has same name for a method i.e if object & prototype have same method, then object's method will be used because object is specific


const sonu = {
    salary: 100000,
};

const monu = {
    salary: 5000,
};

const tiku = {
    salary: 1500000,
};

sonu.__proto__ = employee;
tiku.__proto__ = employee;


// prototype is a special property which is in every javascript object. 
// type of this prototype? -> it is actually a reference to an object (can be null)
