/*
Case Study: Classes & Access Modifiers in TypeScript

EduFlow Academy needs a secure content system where:
- Learners can only view content
- Instructors can create and edit content before publishing
- Admins can review content without accidentally changing it

This is achieved using classes, access modifiers,
inheritance, and abstract classes.
*/

export {}; // prevents conflicts with other case studies


// ==========================================================
// ABSTRACT CLASS (Blueprint for all content)
// ==========================================================

abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish(): void {
    this.published = true;
    console.log(`${this.title} has been published.`);
  }

  protected isPublished(): boolean {
    return this.published;
  }

  // Every content type must define its type
  abstract getType(): string;
}


// ==========================================================
// QUIZ CLASS
// Only instructors can add questions before publishing
// ==========================================================

class Quiz extends Content {
  private questions: string[] = [];

  constructor(title: string, author: string, questions: string[] = []) {
    super(title, author);
    this.questions = questions;
  }

  public addQuestion(question: string, isInstructor: boolean): void {
    if (!this.isPublished() && isInstructor) {
      this.questions.push(question);
    } else {
      throw new Error(
        "Cannot add questions after publishing or without instructor access."
      );
    }
  }

  public getQuestions(): string[] {
    return [...this.questions];
  }

  getType(): string {
    return "Quiz";
  }
}


// ==========================================================
// LESSON CLASS
// Only instructors can edit lesson content before publishing
// ==========================================================

class Lesson extends Content {
  private lessonText: string;

  constructor(title: string, author: string, lessonText: string) {
    super(title, author);
    this.lessonText = lessonText;
  }

  public editContent(newText: string, isInstructor: boolean): void {
    if (!this.isPublished() && isInstructor) {
      this.lessonText = newText;
    } else {
      throw new Error(
        "Cannot edit lesson after publishing or without instructor access."
      );
    }
  }

  public getContent(): string {
    return this.lessonText;
  }

  getType(): string {
    return "Lesson";
  }
}


// ==========================================================
// CHALLENGE SOLUTION: ASSIGNMENT CLASS
// ==========================================================

class Assignment extends Content {
  private dueDate: Date;

  constructor(title: string, author: string, dueDate: Date) {
    super(title, author);
    this.dueDate = dueDate;
  }

  public updateDueDate(newDate: Date, isInstructor: boolean): void {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = newDate;
    } else {
      throw new Error(
        "Cannot update due date after publishing or without instructor access."
      );
    }
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}


// ==========================================================
// USAGE EXAMPLES
// ==========================================================

// Instructor creating quiz
const quiz = new Quiz("TypeScript Basics Quiz", "Srishti");
quiz.addQuestion("What is TypeScript?", true);
quiz.addQuestion("Explain access modifiers.", true);

// Publishing quiz
quiz.publish();

// Learner can only view
console.log("Quiz Questions:", quiz.getQuestions());


// Instructor creating lesson
const lesson = new Lesson(
  "OOP in TypeScript",
  "Tiku",
  "Introduction to classes and objects."
);

lesson.editContent("Detailed explanation of OOP concepts.", true);
lesson.publish();

console.log("Lesson Content:", lesson.getContent());


// Instructor creating assignment
const assignment = new Assignment(
  "Design Patterns Assignment",
  "Sahil",
  new Date("2026-03-01")
);

assignment.updateDueDate(new Date("2026-03-10"), true);
assignment.publish();

console.log("Assignment Due Date:", assignment.getDueDate());


/*
Conclusion:
Using classes and access modifiers ensures:
- Secure data access
- Role-based control
- Code reuse through inheritance
- Clear structure using abstract classes

This design prevents accidental changes and keeps
EduFlow Academy scalable and safe.
*/
