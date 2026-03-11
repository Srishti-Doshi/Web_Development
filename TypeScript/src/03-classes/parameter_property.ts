//Parameter properties: powerfull shortcut in TS classes

//instead of this
class Car {
    name: string
    protected speed: number

    constructor(name: string, speed: number){
        this.name = name
        this.speed = speed
    }
}

//Use this
class ShortcutCar{
    constructor(public name: string, protected speed: number){}
}

/*
Here public tells TypeScript:
1️⃣ create a class property called name
2️⃣ assign the constructor parameter to it
*/


// if you remove public i.e constructor(name: string)  then name is just a parameter, not a class property

// Parameter property syntax works only if you use: public / private / protected