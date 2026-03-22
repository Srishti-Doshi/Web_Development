/*
Case Study: Design Patterns in TypeScript

CoffeeShip Café is growing fast and needs a system that is
reliable, scalable, and easy to extend. Design patterns help
solve common software design problems using proven solutions.

This case study demonstrates:
1. Singleton Pattern
2. Factory Pattern
3. Observer Pattern
4. Strategy Pattern
*/

export {}; // keeps this file isolated from other case studies


// ==========================================================
// 1. SINGLETON PATTERN
// Ensures only one café manager exists
// ==========================================================

class CafeManager {
  private static instance: CafeManager;

  private constructor() {
    console.log("Cafe Manager initialized");
  }

  static getInstance(): CafeManager {
    if (!CafeManager.instance) {
      CafeManager.instance = new CafeManager();
    }
    return CafeManager.instance;
  }

  manage(): void {
    console.log("Managing the CoffeeShip Café operations");
  }
}

// Usage
const managerOne = CafeManager.getInstance();
const managerTwo = CafeManager.getInstance();

managerOne.manage();
console.log("Same manager instance:", managerOne === managerTwo);


// ==========================================================
// 2. FACTORY PATTERN
// Create different drinks easily
// ==========================================================

interface Drink {
  serve(): void;
}

class Latte implements Drink {
  serve(): void {
    console.log("Serving Latte ☕");
  }
}

class Espresso implements Drink {
  serve(): void {
    console.log("Serving Espresso ☕");
  }
}

class Cappuccino implements Drink {
  serve(): void {
    console.log("Serving Cappuccino ☕");
  }
}

class DrinkFactory {
  static createDrink(type: string): Drink {
    if (type === "latte") return new Latte();
    if (type === "espresso") return new Espresso();
    if (type === "cappuccino") return new Cappuccino();
    throw new Error("Unknown drink type");
  }
}

// Usage
const drinkOne = DrinkFactory.createDrink("latte");
drinkOne.serve();

const drinkTwo = DrinkFactory.createDrink("espresso");
drinkTwo.serve();


// ==========================================================
// 3. OBSERVER PATTERN
// Notify everyone when a drink is ready
// ==========================================================

interface Observer {
  update(message: string): void;
}

class Customer implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(this.name + " (Customer): " + message);
  }
}

class InventorySystem implements Observer {
  update(message: string): void {
    console.log("Inventory System:", message);
  }
}

class PromotionSystem implements Observer {
  update(message: string): void {
    console.log("Promotion System: Special offer announced!");
  }
}

class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(message: string): void {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder(): void {
    this.notifyObservers("Drink is ready!");
  }
}

// Usage
const order = new DrinkOrder();

order.addObserver(new Customer("Srishti"));
order.addObserver(new Customer("Tiku"));
order.addObserver(new InventorySystem());

// Challenge requirement: PromotionSystem observer
order.addObserver(new PromotionSystem());

order.completeOrder();


// ==========================================================
// 4. STRATEGY PATTERN
// Change drink preparation method dynamically
// ==========================================================

interface PreparationStrategy {
  prepare(): void;
}

class FastPreparation implements PreparationStrategy {
  prepare(): void {
    console.log("Preparing drink quickly ⚡");
  }
}

class EcoPreparation implements PreparationStrategy {
  prepare(): void {
    console.log("Preparing drink in an eco-friendly way 🌱");
  }
}

class StrongPreparation implements PreparationStrategy {
  prepare(): void {
    console.log("Preparing strong drink 💪");
  }
}

class Barista {
  constructor(private strategy: PreparationStrategy) {}

  setStrategy(strategy: PreparationStrategy): void {
    this.strategy = strategy;
  }

  makeDrink(): void {
    this.strategy.prepare();
  }
}

// Usage
const barista = new Barista(new FastPreparation());
barista.makeDrink();

barista.setStrategy(new EcoPreparation());
barista.makeDrink();

barista.setStrategy(new StrongPreparation());
barista.makeDrink();


/*
Conclusion:
Design patterns help CoffeeShip Café manage growth smoothly.
- Singleton ensures one manager.
- Factory simplifies drink creation.
- Observer keeps all systems updated.
- Strategy allows flexible drink preparation.

These patterns make the system modular, maintainable,
and easy to extend in the future.
*/
