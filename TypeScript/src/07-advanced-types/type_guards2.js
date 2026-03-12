// Type Guards and TypeScript Utility Types
//Using  typeOf and instanceOf
//Partial, Required, Readonly
//need of Type guards
function abcd(arg) {
    // the only methods which are common in both string and number are the only one visible
    arg.toLocaleString();
    arg.toString();
    arg.valueOf();
}
abcd(12);
abcd("hey");
// type guards (tools like if else,typeof,  instanceof) => type guards provide type narrowing
function xyz(arg) {
    if (typeof arg === "string") {
        arg.toLowerCase();
    }
    else if (typeof arg === "number") {
        arg.toFixed;
    }
}
xyz(122);
xyz("hello");
var TV_Remote = /** @class */ (function () {
    function TV_Remote() {
    }
    TV_Remote.prototype.switchOffTV = function () {
        console.log("TV switched off");
    };
    return TV_Remote;
}());
var AC_Remote = /** @class */ (function () {
    function AC_Remote() {
    }
    AC_Remote.prototype.switchOffAC = function () {
        console.log("AC switched off");
    };
    return AC_Remote;
}());
var tv = new TV_Remote();
var ac = new AC_Remote();
function switchOffDevice(device) {
    if (device instanceof TV_Remote) {
        device.switchOffTV();
    }
    else if (device instanceof AC_Remote) {
        device.switchOffAC();
    }
}
switchOffDevice(ac);
