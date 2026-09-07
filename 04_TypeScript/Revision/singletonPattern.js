/*
Singleton
What it is:
Ensures there is only one instance of a particular object throughout your entire application

Analogy:
Like a café with only one manager-no matter how many times you ask for the manager, you always get the same person.

Why use it:
To manage things that should only exist once, such as a settings manager, database connection, or logging service.
*/
var CafeManager = /** @class */ (function () {
    function CafeManager() {
    }
    ;
    CafeManager.getInstance = function () {
        if (!CafeManager.instance) {
            CafeManager.instance = new CafeManager();
        }
        return CafeManager.instance;
    };
    return CafeManager;
}());
// let obj1 = new CafeManager();
// let obj2 = new CafeManager();
var obj1 = CafeManager.getInstance();
var obj2 = CafeManager.getInstance();
console.log(obj1 === obj2);
