/*
Case Study: Conditional Logic in TypeScript

A school portal needs a Student Performance Evaluator to
check exam eligibility, determine pass/fail results, assign
grades, and provide feedback. Conditional statements in
TypeScript help implement these rules clearly and reliably.
*/

export {}; // keeps this file isolated and avoids redeclaration errors


// -------------------- 1. IF STATEMENT --------------------
// Check exam eligibility based on attendance

function checkExamEligibility(attendancePercent: number): boolean {
  if (attendancePercent >= 75) {
    console.log("Srishti is eligible for the exam.");
    return true;
  }
  console.log("Srishti is not eligible due to low attendance.");
  return false;
}


// -------------------- 2. IF…ELSE STATEMENT --------------------
// Determine pass or fail based on score

function checkPassFail(scoreValue: number): boolean {
  if (scoreValue >= 40) {
    console.log("Result: Pass");
    return true;
  } else {
    console.log("Result: Fail");
    return false;
  }
}


// -------------------- 3. IF…ELSE IF…ELSE LADDER --------------------
// Assign grade based on score

function calculateGrade(scoreValue: number): string {
  if (scoreValue >= 90) {
    return "A";
  } else if (scoreValue >= 80) {
    return "B";
  } else if (scoreValue >= 70) {
    return "C";
  } else if (scoreValue >= 60) {
    return "D";
  } else {
    return "F";
  }
}


// -------------------- 4. SWITCH STATEMENT --------------------
// Provide feedback based on grade

function displayFeedback(gradeValue: string): void {
  switch (gradeValue) {
    case "A":
      console.log("Feedback: Excellent performance!");
      break;
    case "B":
      console.log("Feedback: Very good work, keep it up.");
      break;
    case "C":
      console.log("Feedback: Good effort, try to improve.");
      break;
    case "D":
      console.log("Feedback: Needs improvement, work harder.");
      break;
    default:
      console.log("Feedback: Unsatisfactory, seek guidance.");
      break;
  }
}


// -------------------- MAIN EVALUATION FUNCTION --------------------

function evaluateStudentPerformance(
  studentName: string,
  attendance: number,
  score: number
): void {
  console.log("Evaluating student:", studentName);

  if (!checkExamEligibility(attendance)) {
    return;
  }

  if (!checkPassFail(score)) {
    return;
  }

  let finalGrade = calculateGrade(score);
  console.log("Assigned Grade:", finalGrade);

  displayFeedback(finalGrade);
}


// -------------------- EXAMPLE RUN --------------------

evaluateStudentPerformance("Tinka", 82, 88);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// 1. Check if number is positive
function checkSign(numberValue: number): void {
  if (numberValue > 0) {
    console.log("The number is positive.");
  }
}

// 2. Check even or odd
function checkEvenOrOdd(numberValue: number): void {
  if (numberValue % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

// 3. Grade calculation using ladder
function getStudentGrade(scoreValue: number): string {
  if (scoreValue >= 90) return "A";
  else if (scoreValue >= 80) return "B";
  else if (scoreValue >= 70) return "C";
  else if (scoreValue >= 60) return "D";
  else return "F";
}

// 4. Feedback using switch
function giveGradeFeedback(gradeValue: string): void {
  switch (gradeValue) {
    case "A":
      console.log("Outstanding!");
      break;
    case "B":
      console.log("Great job!");
      break;
    case "C":
      console.log("Good, but can do better.");
      break;
    case "D":
      console.log("Needs more effort.");
      break;
    default:
      console.log("Poor performance.");
      break;
  }
}


// -------------------- CHALLENGE FUNCTION CALLS --------------------

checkSign(10);
checkEvenOrOdd(7);

let gradeResult = getStudentGrade(76);
console.log("Grade received:", gradeResult);

giveGradeFeedback(gradeResult);


/*
Conclusion:
Conditional logic in TypeScript allows programs to make
decisions based on conditions. Using if, if–else,
else-if ladders, and switch statements makes code
structured, readable, and easy to maintain.
*/
