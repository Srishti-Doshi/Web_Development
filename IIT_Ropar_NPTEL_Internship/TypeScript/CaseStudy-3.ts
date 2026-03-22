/*
Case Study: Variables in TypeScript

This file focuses only on variable declaration and usage.
Unique variable names are used to avoid conflicts when
multiple TypeScript files are compiled together.
*/


// -------------------- NAMING RULES --------------------

let userFirst: string = "Riya";
let userLast: string = "Sharma";
let userIndex1: number = 101;
let $finalValue: number = 250;


// -------------------- DECLARATION METHODS --------------------

// Type and value
var employeeLabel: string = "Employee-A";

// Type only
var officeCity: string;
officeCity = "Delhi";

// Value only (type inferred)
var systemOnline = true;

// No type, no value
var offerCode;
offerCode = 15;
offerCode = "NA";


// -------------------- NUMERIC OPERATIONS --------------------

var marksTheory: number = 40;
var marksPractical: number = 45;
var totalMarksValue = marksTheory + marksPractical;

console.log("Employee label: " + employeeLabel);
console.log("Theory marks: " + marksTheory);
console.log("Practical marks: " + marksPractical);
console.log("Total marks: " + totalMarksValue);


// -------------------- STRONG TYPING --------------------

// var invalidValue: number = "wrong"; // Compilation error
var validValue: number = 99;


// -------------------- TYPE ASSERTION --------------------

var serialCodeText = "789";
var serialCodeNumber: number = <number><any>serialCodeText;
console.log("Type after assertion: " + typeof serialCodeNumber);


// -------------------- TYPE INFERENCE --------------------

var itemCount = 3; // inferred as number
console.log("Item count: " + itemCount);

// itemCount = "three"; // Error


// -------------------- VARIABLE SCOPE --------------------

// Global
var globalNotice = "Accessible everywhere";

class Inventory {
  productCategory: string = "Electronics"; // class scope
  static warehouseCode: string = "WH-01";

  displayInfo(): void {
    let localMessage = "Accessible only inside method";
    console.log(localMessage);
  }
}

console.log(globalNotice);
console.log(Inventory.warehouseCode);

let inventoryObj = new Inventory();
console.log(inventoryObj.productCategory);
inventoryObj.displayInfo();


// -------------------- PRACTICE TASK SOLUTIONS --------------------

let favPlaceName: string = "Udaipur";
let currentTempValue: number = 30;
let rainingStatus = false;

function printWeatherStatus(
  place: string,
  tempValue: number,
  rainFlag: boolean
): void {
  console.log(
    "In " +
      place +
      ", temperature is " +
      tempValue +
      "°C. Raining: " +
      rainFlag
  );
}

printWeatherStatus(favPlaceName, currentTempValue, rainingStatus);


/*
Conclusion:
Using unique variable names and proper scope management
prevents redeclaration errors and keeps TypeScript code
clean and maintainable in large projects.
*/
