//Write a program to print "try again" until the user enters the correct numbers.
let num = 2
while(num != 26){
    num = prompt("Guess today's lucky number: ")
    if (num != 26) {
        console.log("Try again!!");
    }
}
console.log("🎉 You guessed the correct number!");