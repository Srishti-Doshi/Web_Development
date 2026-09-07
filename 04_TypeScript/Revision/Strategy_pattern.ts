//Strategy Pattern 

/*
Strategy Pattern lets you choose or change an algorithm (behavior) at runtime without modifying the main object


Instead of writing all logic inside one class, you separate behaviors into different classes and plug them when in needed.
*/

/*
A barista has multiple ways to prepare coffee:
Fast
Eco-friendly
Strong

Instead of rewriting the barista every time, we just change the recipe(strategy)
*/

//Encapsulate what varies
//The changing part (algorithm) is moved into separate classes
// The main class (Barista) stays stable


interface PrepStrategy{
    prepare(): void;
}

class FastPrep implements PrepStrategy{
    prepare(): void {
        console.log("Fast prep!");
    }
}

class EcoPrep implements PrepStrategy{
    prepare(): void {
        console.log("Eco prep!");
        
    }
}

// class StrongPrep



class Barista{
    constructor(private strategy: PrepStrategy){}

    setStrategy(strategy: PrepStrategy){
        this.strategy = strategy;
    }

    makeDrink(){
        this.strategy.prepare();
    }
}

const barista = new Barista(new FastPrep());
barista.makeDrink();

barista.setStrategy(new EcoPrep());
barista.makeDrink();


/*
✔ Change behavior at runtime
✔ Avoid big if-else or switch
✔ Follow Open/Closed Principle
✔ Makes code clean + flexible
*/