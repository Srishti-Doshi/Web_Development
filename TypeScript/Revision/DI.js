var PhonePay = /** @class */ (function () {
    function PhonePay() {
    }
    PhonePay.prototype.processPayment = function (amount) {
        console.log("processing payment using PhonePay...");
        return true;
    };
    return PhonePay;
}());
var GooglePay = /** @class */ (function () {
    function GooglePay() {
    }
    GooglePay.prototype.processPayment = function (amount) {
        console.log("processing payment using GooglePay...");
        return true;
    };
    return GooglePay;
}());
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(gateway) {
        this.gateway = gateway;
    }
    ;
    PaymentProcessor.prototype.pay = function (amount) {
        var success = this.gateway.processPayment(amount);
        if (success) {
            console.log("success!");
        }
        else {
            console.log("Failed");
        }
    };
    return PaymentProcessor;
}());
var phonepay = new PhonePay();
var processor = new PaymentProcessor(phonepay);
processor.pay(200);
