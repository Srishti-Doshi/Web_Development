//react-updater-functions


// updater function = A function passed as an argument to setState() usually 
// ex setYear(year + 1)
// ex setYear(updater function)
// ex setYear(arrow function)
//Allow for safe updates based on the previous state 
// Used with multiplee state updates and asynchronous functions
// Good practice to use updater functions

import React, {useState} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);

    /*
    function increment(){
        //still count 1 onlt at once not 3
        //uses the current state to calculate the next state
        //set function do not trigger an update
        // React batches together state updates for performance reasons.
        //NEXT state becomes the CURRENT state after an update.

        setCount(count + 1);
        //UPDATE
        setCount(count + 1);
        //UPDATE
        setCount(count + 1);
    }
    */

    function increment(){

        // takes tthe PENDING state to calculate NEXT state
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c + 1); 
        //c represents the previous count not the updated one
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement(){
        // setCount(count - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0);
        // setCount(c = c => 0); // unnecessary as no need to work on previous state
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {increment}>Increment</button>
        </div>
    );
}
export default MyComponent


//State = Reactive data tracked by React that triggers re-render when updated.

// Normal variable = Just JavaScript memory. React doesn’t care.

//With useState => React registers this state internally.
// When you call setA(), React:
// Updates internal memory
// Triggers re-render
// Re-runs component
// Updates UI