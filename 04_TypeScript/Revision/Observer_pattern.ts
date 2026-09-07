/*
Observer
What it is:
Lets one object (the “subject”) notify many other objects (the “observers”) when something changes.

Analogy:
Like a barista ringing a bell when a drink is ready-everyone who cares (inventory, customer, promotion system) hears the bell and reacts.

Why use it:
To keep different parts of your system in sync without tightly coupling them. */

// Observer pattern = “One object changes → many objects get notified automatically”


interface Observer {
    update (msg: string): void;
}

class Customer implements Observer{
    update(msg: string): void {
        console.log("Customer: ", msg);
    }
}

class Inventory implements Observer{
    update(msg: string): void {
        console.log("inventory: ", msg);
    }
}

// class Delivery

class DrinkOrder{
    private observers : Observer[] = [];

    addObserver(obs: Observer){
        this.observers.push(obs);
    } // Register yourself if you want updates

    removeObserver(obs: Observer){
        this.observers = this.observers.filter(o => o !== obs);
    } //Keep all observers EXCEPT the one we want to remove

    notifyAll(msg: string){
        this.observers.forEach(obs => obs.update(msg));
    }

    completeOrder(){
        this.notifyAll("Order Completed!")
    } //When order completes → everyone gets notified
}


const order = new DrinkOrder();

order.addObserver(new Customer());
order.addObserver(new Inventory());

order.completeOrder();


// When an order is completed, all registered observers are automatically notified and they react in their own way.