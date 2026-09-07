// Dependency Injection means passing required object from outside instead of creating them inside , which make code flxible and testable
//Loose coupling => you can easily change milk -> AlmondMilk
//Easy Testing
//Reusability

interface Ingredient{
    pour():void;
}

class Milk implements Ingredient{
    pour(){
        console.log("Milk added");  
    }
}

class FakeMilk implements Ingredient{
    pour(){
        console.log("Fake milk for testing");
    }
}

class Coffee{
    //constructor injection
    constructor(private item: Ingredient){}

    makeCoffee(){
        console.log("Making Coffee..");
        this.item.pour();
    }
}

let milk = new Milk();
let coffee = new Coffee(milk);

coffee.makeCoffee();