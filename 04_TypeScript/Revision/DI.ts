interface PaymentGateway{
    processPayment(amount: number):boolean;
}

class PhonePay implements PaymentGateway{
    processPayment(amount: number): boolean {
        console.log("processing payment using PhonePay...");
        return true;
    }
}

class GooglePay implements PaymentGateway{
    processPayment(amount: number): boolean {
        console.log("processing payment using GooglePay...");
        return true
    }
}


class PaymentProcessor{
    constructor(private gateway: PaymentGateway){};

    pay(amount: number){
        const success = this.gateway.processPayment(amount);
        if(success){
            console.log("success!");
        }
        else
        {
            console.log("Failed");
        }
        
    }
}

let phonepay = new PhonePay();
let processor = new PaymentProcessor(phonepay);
processor.pay(200);