// super Keyword -> The super keyword is used to call the constructor of its parent class to access the parents properties and methods

// super(args) //calls Parent's constructor

// super.parentMethod(args)

/* What is super?
super is a keyword in JavaScript that is used inside classes.

It is used for two purposes:

1. To call the parent class constructor
2. To call a parent class method*/

/*Why super() must be called first in a child constructor
Key facts:
When a class uses extends, the object being created is based on the parent class first.
The child class does not get access to this until the parent constructor has executed.
Therefore, JavaScript enforces that super() must run before using this. */

class Bakery{
    constructor(cakeName){
       console.log("baking the cake");
       this.cakeName = cakeName;
       console.log('We are baking '+ cakeName);
    }
}

class Decoration extends Bakery{
    constructor(name){
        console.log("decorating the cake");
        super();
        this.name = name; // now 'this exists
        console.log('We are decorating the '+name);
    }
}

d = new Decoration("Red Velvet");

/*Why the error happens:
The JavaScript engine allocates the object only after super() runs.
Before that, this is uninitialized. 

In a subclass constructor, super() is required and must execute before any use of this because the parent class is responsible for creating and initializing the instance.*/