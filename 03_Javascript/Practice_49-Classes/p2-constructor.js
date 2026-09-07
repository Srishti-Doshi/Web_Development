// Constructor() -> special method 
// -> automatically invoked by new
//  -> initializes object


// if no constructor method is created inside a class then js automatiacally creates it

// constructor function is created by name "constructor"
//A class may only have one constructor

class myClass{
    constructor(brand,x){
        console.log("creating new object")
        this.brand = brand;
        console.log(brand);

        this.mileage = x;
        console.log('mileage is ',x);      
    }
}

let myObj = new myClass();
let obj2 = new myClass("toyota");
let obj3 = new myClass("toyota", 20);

obj2.brand = "lexus" //we can update the objects , basically we use constructor when we need to so something during initialization/construction of object

console.log(obj3);

