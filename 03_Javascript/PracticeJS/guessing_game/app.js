// User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt(`Guess the number between 1 to ${max}`);

while(true)
{
    if(guess == 'quit')
    {
        console.log("user quit");
        break;
    }
    
    if(guess == random)
    {
        console.log("You are right! congrats!!");
        break;
    }
    else
    {
        guess = prompt("your guess was wrong, please try again");
    }

}