//Classes and Objects
//Class 
class Device{
    name = "lg";
    price = 1200;
    category = "digital";
}

//Object
let d1 = new Device();
let d2 = new Device();


//Constructors => maker

class BottleMaker{
    constructor(public name: string, public price: number){
    }
}

let b1 = new BottleMaker("Milton", 1200);

class humanMaker{
    age = 50;
    constructor(public name: string, public isCoder: boolean = true){

    }
}
let h1 = new humanMaker("Sonu");
let h2 = new humanMaker("Monu", false);

/*
class Music{
    constructor(public name: string, public artist: string, public thumbnail: string = "something.jpg", public length: number, public free: boolean){}
}
*/

/*
class Music{
    public name;
    public artist;
    public thumbnail;
    public length;
    public free;

    constructor( name: string,  artist: string,  thumbnail: string = "something.jpg",  length: number, free: boolean){
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
*/

class Music{
    constructor(public name: string, public artist: string, public thumbnail: string = "something.jpg", public length: number, public free: boolean){
        if(!thumbnail){
            this.thumbnail = "something.jpg";
        }
    }
}

let m1 = new Music("Chal Chhaiya Chhaya", "Mr. A","", 1200, false);

m1.free = true;


//this keyword
class Abcd {
    name = "Sonu";

    editName(){
        let fullName = this.name + "Doshi"; 
    }

    getDetails(){
        let value = this.editName();
        console.log(value);
        console.log(this.name);
    }
}

class MusicMaker{
//     public name;
//     constructor(name: string){
//         this.name = name;
//     }

    constructor(public name: string){

    }
}

let music = new MusicMaker("sa re ga ma pa");

//Access modifiers(public, private, protected)
class Public_Access{
    constructor(public name: string){
        this.name = name;
    }

    changing(){
        this.name = "sri";
    }
}


//typescript give warning but compiles the wrong code too



//Readonly properties
//Optional properties
//Parameter properties
//Getters and setters
//static members
// Abstract classes and mehods