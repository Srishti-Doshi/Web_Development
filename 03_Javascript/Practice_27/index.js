// Use logical operators to find whether the age of a person lies between 10 and 20.
age = 15;
if(age>10 && age<20)
    {
        console.log("given age lies between 10 and 20.")
    }
    
    else
        {
            console.log("given age do not lie between 10 and 20.")
        }
        
// Demonstrate the use of switch case statements in JavaScript.
a = 2;

switch(a)
{
    case 1:
        console.log("Choice 1")
        break;
    case 2:
        console.log("Choice 2")
        break;
    case 3:
        console.log("Choice 3")
        break;
    default:
        console.log("Invalid Choice")
        break;
}

// Write a Java Script program to find whether a number is Divisible by 2 and 3.
num = 86
if(num % 2 == 0 && num % 3 == 0)
{
    console.log("Given number is divisible by both 2 and 3")
}
else if(num % 2 == 0 && num % 3 != 0)
{
    console.log("Given number is divisible by 2 but not divisible by 3")
}
else if(num % 2 != 0 && num % 3 == 0)
{
    console.log("Given number is divisible by 3 but not divisible by 2")
}
else
{
    console.log("Given number is not divisible by both 2 and 3")
}

// Write a JavaScrift progran to find whether a number is Divisible by either 2 or 3.
if(num % 2 == 0 || num % 3 == 0)
{
    console.log("Given number is divisible by either 2 or 3")
}
else
{
    console.log("not divisble by either 2 or 3")
}

// Print" You can Drive" or " You cannot Drive" based age being greater than 18 using ternary operator.
console.log(age>18 ? "You can Drive" : "You cannot Drive")
