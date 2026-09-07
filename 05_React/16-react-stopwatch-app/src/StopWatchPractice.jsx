import React, { useRef, useState, useEffect } from "react";

function StopWatchPractice() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    /*useRef is used to store a value that should persist between renders
    but should NOT cause a re-render when it changes.
    
    useRef returns an object and the value is stored in its .current property
    */

    const intervalIdRef = useRef(null); //store the ID of the timer created by setInterval
    //We use useRef instead of useState because the interval ID does not affect the UI. If we stored it in state, every change would trigger an unnecessary re-render. useRef lets us store the value without causing re-renders.

    const startTimeRef = useRef(0); //store the time when the stopwatch started

    function start() {
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
        }
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    //We use useEffect because starting a timer is a side effect that should happen when isRunning changes.

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };

    }, [isRunning]);

    function formatTime(){

        let minutes = Math.floor(elapsedTime/(1000*60));
        let seconds = Math.floor((elapsedTime/1000)%60);
        let milliseconds = Math.floor((elapsedTime% 1000)/10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }


    return (
        <div>
            <h1>STOPWATCH</h1>
            <h2>{formatTime()}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default StopWatchPractice;