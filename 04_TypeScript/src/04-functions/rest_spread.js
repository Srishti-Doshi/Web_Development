// ...  rest/spread operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function nums(a, b, c, d, e, f, g) {
}
nums(1, 2, 3, 4, 5, 6, 7);
//rest
function numsSmart() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args[0]);
    console.log(args[20]);
}
numsSmart(1, 2, 3, 44, 43, 222333, 33, 444, 44, 7, 8, 9);
numsSmart(10, 20);
//spread
var arr = [1, 2, 3, 4, 5];
var arr2 = __spreadArray([], arr, true);
console.log(arr2);
