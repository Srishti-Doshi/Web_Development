/*
Case Study: Generics in TypeScript

EduFlow Academy handles different types of content such as quizzes,
video lessons, and coding exercises. Writing separate logic for each
content type leads to code duplication and maintenance issues.

Generics allow us to write reusable, flexible, and type-safe code
that works with any data type.
*/

export {}; // keeps this file isolated from other case studies


// -------------------- GENERIC FUNCTION --------------------

// Identity function using generics
function identityValue<T>(value: T): T {
  return value;
}

let numberResult = identityValue<number>(42);
let stringResult = identityValue("Hello TypeScript");
let booleanResult = identityValue(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);


// -------------------- GENERIC FUNCTION VS ANY --------------------

function echoAnyValue(value: any): any {
  return value;
}

function echoGenericValue<T>(value: T): T {
  return value;
}

let anyOutput = echoAnyValue(123);      // type: any
let genericOutput = echoGenericValue(123); // type: number

console.log(anyOutput);
console.log(genericOutput);


// -------------------- GENERIC CLASS --------------------

// Generic class to store any type of content
class ContentBox<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return [...this.items];
  }
}

// Using generic class for quiz feedback (string)
let quizFeedbackBox = new ContentBox<string>();
quizFeedbackBox.addItem("Great quiz!");
quizFeedbackBox.addItem("Too lengthy");

console.log(quizFeedbackBox.getAllItems());

// Using generic class for lesson feedback (object)
type LessonFeedback = {
  rating: number;
  comment: string;
};

let lessonFeedbackBox = new ContentBox<LessonFeedback>();
lessonFeedbackBox.addItem({ rating: 5, comment: "Excellent explanation" });
lessonFeedbackBox.addItem({ rating: 4, comment: "Very helpful" });

console.log(lessonFeedbackBox.getAllItems());


// -------------------- GENERIC INTERFACE --------------------

interface ApiResponse<T> {
  data: T;
  statusCode: number;
}

let stringResponse: ApiResponse<string> = {
  data: "Success",
  statusCode: 200
};

let numberResponse: ApiResponse<number> = {
  data: 100,
  statusCode: 200
};

console.log(stringResponse);
console.log(numberResponse);


// -------------------- GENERIC TYPE ALIAS --------------------

type Pair<K, V> = {
  key: K;
  value: V;
};

let userPair: Pair<string, number> = {
  key: "Srishti",
  value: 101
};

console.log(userPair);


// -------------------- GENERIC CONSTRAINT --------------------

interface HasId {
  id: string;
}

function printItemId<T extends HasId>(item: T): void {
  console.log("Item ID:", item.id);
}

printItemId({ id: "QZ101", name: "Quiz 1" });
printItemId({ id: "LS202", title: "TypeScript Basics" });


// -------------------- MULTIPLE TYPE PARAMETERS --------------------

function mergeObjects<A, B>(obj1: A, obj2: B): A & B {
  return { ...obj1, ...obj2 };
}

let mergedData = mergeObjects(
  { id: 1 },
  { name: "Tiku", role: "Student" }
);

console.log(mergedData);


// -------------------- DEFAULT GENERIC TYPE --------------------

type DefaultResponse<T = string> = {
  data: T;
  success: boolean;
};

let defaultResponse: DefaultResponse = {
  data: "Operation completed",
  success: true
};

let numericResponse: DefaultResponse<number> = {
  data: 200,
  success: true
};

console.log(defaultResponse);
console.log(numericResponse);


// -------------------- GENERIC FUNCTION FOR ARRAYS --------------------

function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

let firstQuizFeedback = getFirstItem(quizFeedbackBox.getAllItems());
let firstLessonFeedback = getFirstItem(lessonFeedbackBox.getAllItems());

console.log(firstQuizFeedback);
console.log(firstLessonFeedback);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// Generic FeedbackBox class
class FeedbackBox<T> {
  private feedbackList: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbackList.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbackList];
  }
}

let feedbackForQuiz = new FeedbackBox<string>();
feedbackForQuiz.addFeedback("Nice questions");
feedbackForQuiz.addFeedback("Good difficulty");

console.log(feedbackForQuiz.getAllFeedback());


// Generic getFirstItem function already implemented above


/*
Conclusion:
Generics allow developers to write reusable and flexible code
without sacrificing type safety. By using generics in functions,
classes, interfaces, and type aliases, duplicated code is reduced,
maintenance becomes easier, and errors are caught at compile time.
*/
