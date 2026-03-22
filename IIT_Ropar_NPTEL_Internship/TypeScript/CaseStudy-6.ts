/*
Case Study: Built-in Types in TypeScript

In financial applications, different kinds of data must be handled
accurately. Numbers represent balances, strings store names, booleans
track status, and special types handle missing or exceptional cases.

TypeScript provides built-in types to ensure that every value is used
correctly and safely.
*/

export {}; // makes this file a module and avoids redeclaration errors


// -------------------- NUMBER TYPE --------------------

let balanceAmountValue: number = 1000.5;
let interestRateValue: number = 7.25;
let hexValueExample: number = 0xff;
let binaryValueExample: number = 0b1010;

console.log("Balance:", balanceAmountValue);
console.log("Interest rate:", interestRateValue);


// -------------------- STRING TYPE --------------------

let accountHolderFirst: string = "John";
let accountHolderLast: string = "Doe";
let accountFullNameValue: string = `${accountHolderFirst} ${accountHolderLast}`;

console.log("Account holder:", accountFullNameValue);


// -------------------- BOOLEAN TYPE --------------------

let accountActiveStatus: boolean = true;
console.log("Account active:", accountActiveStatus);


// -------------------- SYMBOL TYPE --------------------

// Symbol used for unique identification
const transactionSymbolKey: symbol = Symbol("transactionKey");

let transactionObjectValue = {
  [transactionSymbolKey]: "TXN-9981"
};

console.log("Transaction object:", transactionObjectValue);


// -------------------- OBJECT TYPE --------------------

let accountDetailsObject: object = {
  id: 1,
  type: "Savings",
  currency: "INR"
};

console.log("Account details:", accountDetailsObject);


// -------------------- NULL & UNDEFINED --------------------

let intentionallyEmptyValue: null = null;
let uninitializedValue: undefined;

console.log("Null value:", intentionallyEmptyValue);
console.log("Undefined value:", uninitializedValue);


// -------------------- VOID TYPE --------------------

// Function that returns nothing
function printAccountStatement(): void {
  console.log("Account statement generated successfully.");
}

printAccountStatement();


// -------------------- NEVER TYPE --------------------

// Function that never returns normally
function criticalSystemFailure(): never {
  throw new Error("Critical system failure occurred!");
}

// Uncommenting below will crash the program
// criticalSystemFailure();


// -------------------- STEP-BY-STEP PRACTICE --------------------

let savingsBalanceValue: number = 25000.75;
let savingsAccountName: string = "Primary Savings";
let savingsAccountStatus: boolean = true;

let savingsAccountId: symbol = Symbol("savingsId");

let savingsAccountObject: object = {
  name: savingsAccountName,
  balance: savingsBalanceValue
};

let missingDataValue: null = null;
let optionalNoteValue: undefined;


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

function processTransactionRecord(
  amountValue: number,
  descriptionText: string | undefined,
  isCreditFlag: boolean
): void {
  if (amountValue < 0) {
    throw new Error("Transaction amount cannot be negative.");
  }

  let transactionDescription =
    descriptionText !== undefined ? descriptionText : "No description provided";

  console.log("Transaction Summary:");
  console.log("Amount:", amountValue);
  console.log("Type:", isCreditFlag ? "Credit" : "Debit");
  console.log("Description:", transactionDescription);
}

// Function calls
processTransactionRecord(500, "Salary credited", true);
processTransactionRecord(200, undefined, false);


/*
Conclusion:
Built-in types in TypeScript help represent data accurately and safely.
Using the correct type for each value reduces errors, improves clarity,
and makes financial systems more reliable and maintainable.
*/
