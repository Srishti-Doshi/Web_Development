// readonly  => used for values, you don't want to get change

class User{
    constructor(public name: string){}

    changeName(){
        this.name = "hello";
    }
}

let u1 = new User("Sri")
//u1 => name = "Sri"

u1.changeName()
//u1 => name = "hello"



class NewUser{
    constructor(public readonly name: string){}

    changeName(){
//        this.name = "hello";  //can't change the name , it will show a warning : cannot assign to 'name' because it is a read-only property. 
    }
}

let n1 = new NewUser("Sri")
//n1 => name = "Sri"

n1.changeName()
//n1 => name = "hello"



