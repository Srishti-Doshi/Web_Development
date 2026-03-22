/*
Case Study: any type in TypeScript

In a dynamic survey system, answers may come in many forms.
Some answers are numbers, some are strings, some are lists,
and others may be objects.

When the structure of data is not known in advance,
TypeScript provides the 'any' type to allow flexibility.
*/


// -------------------- USING ANY TYPE --------------------

// Variable declared with any type
let flexibleAnswerValue: any;

// Assigning different types of values
flexibleAnswerValue = "Yes";
console.log("Answer as string:", flexibleAnswerValue);

flexibleAnswerValue = 5;
console.log("Answer as number:", flexibleAnswerValue);

flexibleAnswerValue = ["Option A", "Option B"];
console.log("Answer as array:", flexibleAnswerValue);


// -------------------- ARRAY OF ANY --------------------

// Array that can store values of different types
let collectedResponsesList: any[] = [];

collectedResponsesList.push("No");
collectedResponsesList.push(10);
collectedResponsesList.push({ remark: "Not applicable" });


// Processing answers carefully
for (let responseItem of collectedResponsesList) {
  console.log("Received response:", responseItem);
}


// -------------------- FUNCTION USING ANY --------------------

// Object to store survey answers
let surveyRecordsStore: { [key: string]: any } = {};

// Function to record answers
function recordSurveyResponse(
  questionKey: string,
  responseValue: any
): void {
  surveyRecordsStore[questionKey] = responseValue;
}


// -------------------- ADDING DIFFERENT ANSWERS --------------------

recordSurveyResponse("Q1", "Satisfied");
recordSurveyResponse("Q2", 4);
recordSurveyResponse("Q3", ["Option A", "Option C"]);


// Printing all stored answers
for (let key in surveyRecordsStore) {
  console.log("Question:", key, "Answer:", surveyRecordsStore[key]);
}


// -------------------- TYPE CHECKING WITH ANY --------------------

// Checking type before using value
let unknownInputValue: any = "Survey completed";

if (typeof unknownInputValue === "string") {
  console.log("String length:", unknownInputValue.length);
}


// -------------------- RISK OF ANY --------------------

// No compile-time error, but may cause runtime issue
let riskyValue: any = 10;
// console.log(riskyValue.toUpperCase()); // Runtime error if uncommented


/*
Conclusion:
The 'any' type allows maximum flexibility when working with
unknown or changing data. However, it removes type safety,
so it should be used carefully and replaced with proper
types once the data structure becomes clear.
*/
