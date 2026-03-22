/*
Case Study: Dependency Injection in TypeScript

A modern payment processing system must support multiple
payment gateways, allow easy switching between them,
and enable safe testing without real transactions.

Dependency Injection helps keep the payment logic
decoupled, flexible, and easy to maintain.
*/

export {}; // prevents redeclaration conflicts


// ==========================================================
// PAYMENT GATEWAY INTERFACE (CONTRACT)
// ==========================================================

interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}


// ==========================================================
// CONCRETE PAYMENT GATEWAYS
// ==========================================================

class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Stripe: Processing payment of ₹${amount}`);
    return true;
  }
}

class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`PayPal: Processing payment of ₹${amount}`);
    return true;
  }
}


// ==========================================================
// PAYMENT PROCESSOR (USES CONSTRUCTOR INJECTION)
// ==========================================================

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful ✅");
    } else {
      console.log("Payment failed ❌");
    }
  }
}


// ==========================================================
// USING DIFFERENT GATEWAYS
// ==========================================================

const stripeProcessor = new PaymentProcessor(new StripeGateway());
stripeProcessor.pay(500);

const paypalProcessor = new PaymentProcessor(new PaypalGateway());
paypalProcessor.pay(750);


// ==========================================================
// TESTING WITH MOCK GATEWAY (NO REAL TRANSACTIONS)
// ==========================================================

class MockSuccessGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock Gateway: Simulating payment of ₹${amount}`);
    return true;
  }
}

const testProcessor = new PaymentProcessor(new MockSuccessGateway());
testProcessor.pay(100);


// ==========================================================
// CHALLENGE SOLUTION
// ==========================================================

// 1. BankTransferGateway implementation
class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Bank Transfer: Processing payment of ₹${amount}`);
    return true;
  }
}

const bankProcessor = new PaymentProcessor(new BankTransferGateway());
bankProcessor.pay(1200);


// 2. Mock gateway that simulates failure
class MockFailureGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock Failure: Payment of ₹${amount} failed`);
    return false;
  }
}

const failureTestProcessor = new PaymentProcessor(
  new MockFailureGateway()
);
failureTestProcessor.pay(300);


/*
Conclusion:
Dependency Injection allows the payment processor to work
with any payment gateway without knowing its implementation.
By injecting dependencies through the constructor and
using interfaces as contracts, the system becomes flexible,
testable, and easy to extend.
*/