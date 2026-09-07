// Factory Pattern = extend behavior without modifying existing code
var Latte = /** @class */ (function () {
    function Latte() {
    }
    Latte.prototype.serve = function () {
        console.log("Here is your latte!");
    };
    return Latte;
}());
var Expresso = /** @class */ (function () {
    function Expresso() {
    }
    Expresso.prototype.serve = function () {
        console.log("Here is your expresso!");
    };
    return Expresso;
}());
var DrinkFactory = /** @class */ (function () {
    function DrinkFactory() {
    }
    DrinkFactory.createDrink = function (drinkType) {
        if (drinkType === "latte")
            return new Latte();
        if (drinkType === "expresso")
            return new Expresso();
        throw new Error("Unkown Drink , not Available!!");
    };
    return DrinkFactory;
}());
var drink = DrinkFactory.createDrink("latte");
drink.serve();
