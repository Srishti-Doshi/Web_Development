// Factory Pattern = extend behavior without modifying existing code

/*
What it is:
Provides a way to create objects (like drinks, users, or shapes) without specifying the exact class/type to create.

Analogy:
Like a barista who can make any drink you order (“latte,” “espresso,” “tea”)-you just tell them what you want, not how to make it.

Why use it:
To make it easy to add new types of objects without changing lots of code. */

// Open/Closed Principle
// (Open for extension, closed for modification)


interface Drink{
    serve():void;
}

class Latte implements Drink{
    serve(): void {
        console.log("Here is your latte!");
    }
}

class Expresso implements Drink{
    serve(): void {
        console.log("Here is your expresso!");
    }
}

class DrinkFactory{
    static createDrink(drinkType: string): Drink{
        if(drinkType === "latte") return new Latte();
        if(drinkType === "expresso") return new Expresso();
        throw new Error("Unkown Drink , not Available!!")
    }
}

const drink = DrinkFactory.createDrink("latte");
drink.serve();