/*
Case Study: Mastering Functions in TypeScript

A city library needs a Report Generator module to automate
member handling, fine calculation, fee discounts, visitor
registration, and report generation. Functions in TypeScript
help organize this logic in a reusable and type-safe way.
*/

export {}; // keeps this file isolated from other case studies


// -------------------- 1. FUNCTION DECLARATION & OPTIONAL PARAMETER --------------------

function displayMemberDetails(
  memberId: number,
  memberName: string,
  memberEmail?: string
): void {
  console.log("ID:", memberId);
  console.log("Name:", memberName);

  if (memberEmail) {
    console.log("Email:", memberEmail);
  } else {
    console.log("Email: Not provided");
  }
}

// Function calls
displayMemberDetails(1, "Srishti", "srishti@example.com");
displayMemberDetails(2, "Tinka");


// -------------------- 2. REST PARAMETERS --------------------
// Calculate total fines (variable number)

function calculateTotalFines(...fineAmounts: number[]): number {
  let totalFineValue = 0;

  for (let fine of fineAmounts) {
    totalFineValue += fine;
  }

  return totalFineValue;
}

let finesTotal = calculateTotalFines(5, 10, 2.5);
console.log("Total fines:", finesTotal);


// -------------------- 3. DEFAULT PARAMETERS --------------------
// Membership fee calculation with discount

function calculateMembershipFee(
  basePrice: number,
  discountRate: number = 0.1
): number {
  return basePrice - basePrice * discountRate;
}

console.log("Fee with default discount:", calculateMembershipFee(100));
console.log("Fee with 20% discount:", calculateMembershipFee(100, 0.2));


// -------------------- 4. CALLBACK & ANONYMOUS / ARROW FUNCTIONS --------------------

function greetLibraryVisitor(
  visitorName: string,
  formatter: (name: string) => void
): void {
  formatter(visitorName);
}

const vipGreeting = (name: string): void => {
  console.log("Welcome VIP", name + "!");
};

const simpleGreeting = (name: string): void => {
  console.log("Hello,", name);
};

greetLibraryVisitor("Sahil", vipGreeting);
greetLibraryVisitor("Sonu", simpleGreeting);


// -------------------- 5. RECURSION --------------------
// Factorial example

function calculateFactorial(num: number): number {
  if (num <= 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

console.log("Factorial of 5:", calculateFactorial(5));


// -------------------- 6. FUNCTION OVERLOADING --------------------
// Generate reports in different formats

function generateLibraryReport(data: object[]): string;
function generateLibraryReport(
  data: object[],
  format: "json"
): string;

function generateLibraryReport(
  data: any[],
  format?: string
): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }

  return data.map(item => item.toString()).join("\n");
}

let sampleBooks = [{ title: "1984" }, { title: "Clean Code" }];

console.log("Text Report:");
console.log(generateLibraryReport(sampleBooks));

console.log("JSON Report:");
console.log(generateLibraryReport(sampleBooks, "json"));


// -------------------- 7. FUNCTION TYPE & TYPE ALIAS --------------------

type VisitorFormatter = (name: string) => void;

let consoleFormatter: VisitorFormatter = (name) => {
  console.log("Greetings,", name);
};

consoleFormatter("Appu");


/*
Conclusion:
Functions in TypeScript allow developers to organize logic
into reusable, well-typed units. Features like optional,
rest, default parameters, callbacks, recursion, overloads,
and function type aliases make code flexible, readable,
and maintainable in real-world applications.
*/
