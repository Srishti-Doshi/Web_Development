var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(value) {
    return value;
}
console.log(identity("hello"));
console.log(identity(4));
console.log(identity(true));
function identityy(value) {
    return value;
}
console.log(identityy("hello hey"));
console.log(identityy(44));
console.log(identityy(false));
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
        this.value = value;
    }
    return Box;
}());
var p1 = {
    key: "apple",
    value: 9
};
function printId(item) {
    console.log(item.id);
}
printId({ id: "name" });
printId({ id: "name", num: 5 });
var merge = function (a, b) {
    return __assign(__assign({}, a), b);
};
var merged = merge({ id: 1 }, { name: "sri" });
console.log(merged);
var u1 = { name: "Sonu", age: 40, gender: "F", isStudent: true };
var u2 = { name: "sri" };
var u3 = { age: 7, gender: "F" };
u3.age = 9;
var u4 = {};
var u5 = { name: "Sonu", age: 40, gender: "F", isStudent: true };
// u5.age = 67;  //error
// record<K,V>    K => types of keys  , V => types of values
var scores = {
    math: 90,
    physics: 85
};
//Pick<T, K>  => T=> Type   K=> porperties
var u6 = {
    name: "monu",
    age: 18
};
var u7 = {
    name: "a",
    isStudent: true,
    // age: 6,
};
var u8 = {
    name: "manav",
    age: 6,
    gender: "M",
    isStudent: true,
};
