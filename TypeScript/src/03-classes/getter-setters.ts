// getters and setters => used when we want to control how properties are accessed or modified.


/*
Example idea 
get → read a value
set → change a value
*/

/*
get and set are special keywords used to define accessor methods.
They allow us to control how a property is read or written, while still using normal property syntax.
*/

class Person {
    private _age: number = 0

    get age(){
        return this._age
    }

    set age(value : number){
        if(value < 0){
            console.log("Age cannot be negative")
        }
        else{
            this._age = value
        }
    }
}

let p = new Person()

p.age = 20;  // setter runs
console.log(p.age) // getter runs


//Need of Geters & Setters => They allow us to add logic while reading or writing values => invalid values can be prevented


/* here we So we store the real value in: _age and expose: age , to prevent infinite loop/recursion

_age → actual storage
age  → getter/setter interface
*/


/*The underscore _ in _age is just a naming convention.

Developers use it to indicate:internal/private variable

You could technically write: private realAge: number

But _age is the common style.*/