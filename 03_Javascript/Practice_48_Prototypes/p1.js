const student = {
    fullName : "Srishti Doshi",
    marks : 97,
    printMarks : function (){
        // console.log('marks = ', marks);   -> error marks is not defined    
        console.log('marks = ', this.marks);  // this.marks -> student.marks      , this ->keyword -> object itself , we can not access marks simply that's why we use this
    },
};


// here student is object -> properties/state : fullName, marks

// every object has a special automatically created property -> prototype

//prototype itself is a an object with so many methods and property already defined

console.log(student.printMarks); //defined
console.log(student.abs); //undefined
console.log(student.toString); // from prototype object