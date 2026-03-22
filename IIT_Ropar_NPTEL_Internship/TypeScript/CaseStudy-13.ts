/*
Case Study: Optional and Default Parameters in TypeScript

In a social application, a greeting system must handle cases
where some user information is optional or missing. TypeScript
supports optional and default parameters to make functions
safe, flexible, and easy to maintain.
*/

export {}; // keeps this file isolated from other case studies


// -------------------- OPTIONAL PARAMETER EXAMPLE --------------------

function greetUser(
  userName: string,
  userAge?: number
): void {
  if (typeof userAge === "number") {
    console.log(
      "Hello " + userName + ", you are " + userAge + " years old."
    );
  } else {
    console.log("Hello " + userName);
  }
}

// Function calls
greetUser("Srishti");
greetUser("Tinka", 22);


// -------------------- DEFAULT PARAMETER EXAMPLE --------------------

function greetWithDefaultAge(
  userName: string,
  userAge: number = 25
): void {
  console.log(
    "Hello " + userName + ", you are " + userAge + " years old."
  );
}

// Function calls
greetWithDefaultAge("Tiku");
greetWithDefaultAge("Sahil", 30);


// -------------------- PARAMETER ORDERING RULE --------------------

// Required parameters must come first
// Optional or default parameters must come after

function calculateFinalScore(
  baseScore: number,
  bonusScore?: number
): number {
  if (bonusScore !== undefined) {
    return baseScore + bonusScore;
  }
  return baseScore;
}

console.log("Final score:", calculateFinalScore(80));
console.log("Final score:", calculateFinalScore(80, 10));


// -------------------- DEFAULT PARAMETER AS OPTIONAL --------------------

function calculateDiscountedPrice(
  basePrice: number,
  discountRate: number = 0.1
): number {
  return basePrice - basePrice * discountRate;
}

console.log("Price with default discount:", calculateDiscountedPrice(100));
console.log("Price with 20% discount:", calculateDiscountedPrice(100, 0.2));


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// describePerson function
function describePerson(
  name: string,
  age?: number
): void {
  if (age !== undefined) {
    console.log("Name:", name + ", Age:", age);
  } else {
    console.log("Name:", name + ", Age: Unknown");
  }
}

// Function calls
describePerson("Sonu");
describePerson("Appu", 27);


// calculatePrice function
function calculatePrice(
  basePrice: number,
  discount: number = 0.1
): number {
  return basePrice - basePrice * discount;
}

// Test calls
console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80


/*
Conclusion:
Optional parameters allow functions to accept missing values
safely, while default parameters provide automatic fallback
values. Using correct parameter ordering and proper checks
helps build reliable and flexible TypeScript functions.
*/
