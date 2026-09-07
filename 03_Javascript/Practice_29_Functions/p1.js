//Write a program to print the marks of a student in an object using for loop.
const studentMarks = {
    math: 90,
    science: 85,
    english: 92,
    history: 88
};
console.log(studentMarks)

console.log("using for");

subjects = Object.keys(studentMarks);

for(let i = 0; i < subjects.length; i++)
{
    let sub = subjects[i];
    console.log(sub + " :",studentMarks[sub]);
}

// Write the program Q1 using for in loop.
console.log("using forin");

for (const key in studentMarks) {
    console.log(key + ":", studentMarks[key])
}