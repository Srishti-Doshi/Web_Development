var CafeManager = /** @class */ (function () {
    function CafeManager() {
    }
    CafeManager.getManager = function () {
        if (CafeManager.instance) {
            return CafeManager.instance;
        }
        else {
            CafeManager.instance = new CafeManager();
            return CafeManager.instance;
        }
    };
    return CafeManager;
}());
// let manager_ji = new CafeManager();
// let manager_bhaiya = new CafeManager();
// console.log(manager_bhaiya === manager_ji)
var m1 = CafeManager.getManager();
var m2 = CafeManager.getManager();
console.log(m1 === m2);
var b = undefined;
// b = 89;  //error
