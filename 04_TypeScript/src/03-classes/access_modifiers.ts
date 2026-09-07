// Access Modifiers => controls who can access class properties.

//public => accessible from anywhere (outside the class, inside the class, etc..)
// If you do not write anything, TypeScript assumes: public
//no modifier = public


class Person {
    public name: string   // same as name: string

    constructor(name : string){
        this.name = name
    }
}

// Now we can access it outside the class
let p1 = new Person("sonu")
console.log(p1.name)  // ✔ Works.





// private  => used to protect internal data.

// private → accessible ONLY inside the class
// Outside the class, it cannot be accessed.

class BankAccount {

  private balance: number = 1000

  showBalance() {
    console.log(this.balance)
  }

}

let acc = new BankAccount()

// Trying to Access It
// console.log(acc.balance) //❌ This will give an error.

acc.showBalance() // ✔ works





// protected 
// protected → inside the class + inside subclasses
// protected is slightly less restrictive than private.

class User{
    protected name: string

    constructor(name: string){
        this.name = name
    }

    showName(){
        console.log(this.name) //works
    }
}

class Admin extends User{
    fullName(){
        console.log(this.name)  //works
    }
}

let s = new Admin("Srishti")
s.showName()  // works
s.fullName()  // works

// console.log(s.name) // error