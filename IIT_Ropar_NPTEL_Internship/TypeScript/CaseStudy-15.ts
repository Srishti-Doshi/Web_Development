/*
Case Study: Advanced Types in TypeScript

ViBe’s dynamic dashboard needs to handle learners, instructors,
and admins whose data shapes may overlap or change over time.
Advanced types in TypeScript help model this complexity safely
and flexibly without duplicating code.
*/

export {}; // keeps this file isolated from other case studies


// -------------------- BASIC USER TYPES --------------------

type LearnerUser = {
  id: string;
  quizzesCompleted: number;
};

type InstructorUser = {
  id: string;
  coursesTaught: number;
};

type AdminUser = {
  id: string;
  accessLevel: "basic" | "super";
};


// -------------------- UNION & INTERSECTION TYPES --------------------

// Union: user can be learner OR instructor OR admin
type AnyPlatformUser = LearnerUser | InstructorUser | AdminUser;

// Intersection: user is BOTH learner AND instructor
type MultiRoleUser = LearnerUser & InstructorUser;


// -------------------- UNION TYPE USAGE --------------------

function printUserDetails(user: AnyPlatformUser): void {
  if ("quizzesCompleted" in user) {
    console.log("Learner completed quizzes:", user.quizzesCompleted);
  } else if ("coursesTaught" in user) {
    console.log("Instructor taught courses:", user.coursesTaught);
  } else {
    console.log("Admin access level:", user.accessLevel);
  }
}

// Example calls
printUserDetails({ id: "S1", quizzesCompleted: 8 });
printUserDetails({ id: "T1", coursesTaught: 3 });
printUserDetails({ id: "A1", accessLevel: "super" });


// -------------------- INTERSECTION TYPE USAGE --------------------

let multiRoleExample: MultiRoleUser = {
  id: "SR01",
  quizzesCompleted: 12,
  coursesTaught: 2
};

console.log("Multi-role user:", multiRoleExample);


// -------------------- MAPPED TYPES --------------------

// Module status type
type ModuleStatus = "not-started" | "in-progress" | "completed";

// Generic mapped type
type ProgressTracker<Modules extends string> = {
  [K in Modules]: ModuleStatus;
};

// Using mapped type
type CourseModules = "quiz1" | "video2" | "assignment3";

let srishtiProgress: ProgressTracker<CourseModules> = {
  quiz1: "completed",
  video2: "in-progress",
  assignment3: "not-started"
};

console.log("Progress map:", srishtiProgress);


// -------------------- CONDITIONAL TYPES --------------------

type FeedbackPermission<T extends ModuleStatus> =
  T extends "completed" ? string : never;

// Conditional type usage
type QuizFeedback = FeedbackPermission<"completed">;     // string
type VideoFeedback = FeedbackPermission<"in-progress">; // never


// -------------------- UTILITY TYPES --------------------

type LearnerReport = {
  name: string;
  score: number;
  feedback: string;
};

// All properties optional
type DraftLearnerReport = Partial<LearnerReport>;

// All properties readonly
type FinalLearnerReport = Readonly<LearnerReport>;

let draftReport: DraftLearnerReport = {
  name: "Tinka"
};

let finalReport: FinalLearnerReport = {
  name: "Tiku",
  score: 92,
  feedback: "Excellent performance"
};

console.log(draftReport);
console.log(finalReport);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// 1. Instructor OR Admin
type InstructorOrAdmin = InstructorUser | AdminUser;

// 2. ReadonlyAssignment
type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;

let assignmentDetails: ReadonlyAssignment = {
  title: "TypeScript Project",
  dueDate: new Date(),
  points: 100
};

// 3. StatsAsStrings using mapped type
type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};

type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

let sonuStats: StatsAsStrings = {
  quizzes: "5",
  videos: "10",
  assignments: "3"
};

console.log("Stats as strings:", sonuStats);


/*
Conclusion:
Advanced types in TypeScript—such as unions, intersections,
mapped types, conditional types, and utility types—allow
developers to model complex, real-world data safely.
They make applications flexible, scalable, and easy to extend
without sacrificing type safety.
*/
