/*
Observer
What it is:
Lets one object (the “subject”) notify many other objects (the “observers”) when something changes.

Analogy:
Like a barista ringing a bell when a drink is ready-everyone who cares (inventory, customer, promotion system) hears the bell and reacts.

Why use it:
To keep different parts of your system in sync without tightly coupling them. */
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (msg) {
        console.log("Customer: ", msg);
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (msg) {
        console.log("inventory: ", msg);
    };
    return Inventory;
}());
// class Delivery
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    }; // Register yourself if you want updates
    DrinkOrder.prototype.removeObserver = function (obs) {
        this.observers = this.observers.filter(function (o) { return o !== obs; });
    }; //Keep all observers EXCEPT the one we want to remove
    DrinkOrder.prototype.notifyAll = function (msg) {
        this.observers.forEach(function (obs) { return obs.update(msg); });
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Order Completed!");
    }; //When order completes → everyone gets notified
    return DrinkOrder;
}());
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.completeOrder();
// When an order is completed, all registered observers are automatically notified and they react in their own way.
