/*
Case Study: Mastering Loops in TypeScript

A city library processes many transactions every day such as
book checkouts, returns, cancellations, and priority requests.
Loops in TypeScript help automate repetitive processing and
make the system efficient and reliable.
*/

export {}; // prevents redeclaration errors with other case studies


// -------------------- DATA MODELING --------------------

type LibraryTransaction = {
  transactionId: number;
  transactionType: "checkout" | "return" | "cancelled" | "priority";
};

const dailyTransactions: LibraryTransaction[] = [
  { transactionId: 1, transactionType: "checkout" },
  { transactionId: 2, transactionType: "cancelled" },
  { transactionId: 3, transactionType: "return" },
  { transactionId: 4, transactionType: "priority" },
  { transactionId: 5, transactionType: "checkout" }
];

const bookInventory: { [title: string]: number } = {
  "TypeScript Basics": 4,
  "The Hobbit": 3,
  "Clean Code": 5
};

const activeVisitors: string[] = ["Srishti", "Tinka", "Tiku", "Appu"];


// -------------------- FOR LOOP --------------------
// Process a fixed list of transactions

let processedCountValue = 0;

for (let i = 0; i < dailyTransactions.length; i++) {
  const tx = dailyTransactions[i];

  if (tx.transactionType === "cancelled") {
    continue; // skip cancelled transactions
  }

  if (tx.transactionType === "priority") {
    console.log("Priority transaction found. Stopping processing.");
    break; // stop processing on priority
  }

  console.log(
    "Processing transaction " +
      tx.transactionId +
      " of type " +
      tx.transactionType
  );

  processedCountValue++;
}

console.log("Total processed transactions:", processedCountValue);


// -------------------- WHILE LOOP --------------------
// Process transactions until queue is empty

let transactionQueue = [...dailyTransactions];
let whileProcessedCount = 0;

while (transactionQueue.length > 0) {
  const tx = transactionQueue.shift()!;

  if (tx.transactionType === "cancelled") {
    continue;
  }

  console.log("While loop processed transaction:", tx.transactionId);
  whileProcessedCount++;
}

console.log("Processed using while loop:", whileProcessedCount);


// -------------------- DO…WHILE LOOP --------------------
// Ensure at least one return check

let returnCountValue = 0;
let indexValue = 0;

do {
  const tx = dailyTransactions[indexValue];

  if (tx && tx.transactionType === "return") {
    console.log("Handling return transaction:", tx.transactionId);
    returnCountValue++;
  }

  indexValue++;
} while (indexValue < dailyTransactions.length);

console.log("Total returns handled:", returnCountValue);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// 1. Count each transaction type
let transactionSummary = {
  checkout: 0,
  return: 0,
  cancelled: 0,
  priority: 0
};

for (let tx of dailyTransactions) {
  transactionSummary[tx.transactionType]++;
}

console.log("Transaction summary:", transactionSummary);


// 2. Infinite loop with break on priority
let loopIndexValue = 0;

while (true) {
  let tx = dailyTransactions[loopIndexValue];

  if (!tx) break;

  if (tx.transactionType === "priority") {
    console.log("Priority found, breaking infinite loop.");
    break;
  }

  console.log("Infinite loop processing:", tx.transactionId);
  loopIndexValue++;
}


// 3. do…while with dynamic queue
let dynamicReturnsQueue: LibraryTransaction[] = [
  { transactionId: 6, transactionType: "return" }
];

let processedDynamicReturns = 0;

do {
  const tx = dynamicReturnsQueue.shift();

  if (tx) {
    console.log("Dynamic return processed:", tx.transactionId);
    processedDynamicReturns++;
  }
} while (dynamicReturnsQueue.length > 0);

console.log("Dynamic returns processed:", processedDynamicReturns);


// 4. Reset inventory using for…in
for (let bookTitle in bookInventory) {
  bookInventory[bookTitle] = 0;
}

console.log("Inventory after reset:", bookInventory);


// 5. Display visitors in reverse order
for (let i = activeVisitors.length - 1; i >= 0; i--) {
  console.log("Goodbye visitor:", activeVisitors[i]);
}


/*
Conclusion:
Loops in TypeScript allow efficient processing of repeated tasks.
Using for, while, do…while, for…in, and for…of loops helps handle
collections, control execution flow, and avoid manual errors.
Choosing the right loop improves clarity and performance.
*/
