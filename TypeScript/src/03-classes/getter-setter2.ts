//getter setter

//old way of creating getter and setter
class Profile{
    constructor(public name: string, public age : number, public gender? : string){}

    getName(){
        return this.name
    }

    setName(value: string){
        this.name = value
    }
}

let profile1 = new Profile("sonu", 42, "F")
profile1.getName() // name = "sonu"
profile1.setName("Sonu Singh")
profile1.getName() // name = "Sonu Singh"


//but in TypeScript we don't follow the above approach , we use get and set keyword
class MyProfile{
    constructor(public _name: string, public age : number, public gender? : string){}

    get name(){  // we can use name() method as a property => obj.name
        return this._name
    }

    set name(value: string){  //we can use name() method as a property => obj.name = value
        this._name = value
    }
}

let mp1 = new Profile("sonu", 42, "F")
//now we don't have to use method call => name() , name is enough
mp1.name    //  name = "sonu"
mp1.name = "monu"
mp1.name   // name = "monu"
