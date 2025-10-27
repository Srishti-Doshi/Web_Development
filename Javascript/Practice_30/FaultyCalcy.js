/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

num1 = parseFloat(prompt("Enter number 1 : "));
num2 = parseFloat(prompt("Enter number 2 : "));
choice = prompt("Enter Operation : '+' , '*' , '-' , '/', '**'")
let result;

if (Math.random()<0.1)
{
    switch(choice)
    {
        case'+':
        {
            result = num1 - num2;
            break;
        }
        case'-':
        {
            result = num1 / num2;
            break;
        }
        case'*':
        {
            result = num1 + num2;
            break;
        }
        case'/':
        {
            result = num1 ** num2;
            break;
        }
        case'**':
        {
            result = num1 + num2;
            break;
        }
        default:
        {
            console.log("Invalid Operation Entered!")
            break;
        }
    }
}
else
{
    switch(choice)
    {
        case'+':
        {
            result = num1 + num2;
            break;
        }
        case'-':
        {
            result = num1 - num2;
            break;
        }
        case'*':
        {
            result = num1 * num2;
            break;
        }
        case'/':
        {
            result = num1 / num2;
            break;
        }
        case'**':
        {
            result = num1 ** num2;
            break;
        }
        default:
        {
            console.log("Invalid Operation Entered!")
            break;
        }
    }
}

console.log("num1 "+choice+" num2 = ",result)