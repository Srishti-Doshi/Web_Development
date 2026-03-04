import React, {useState, useEffect} from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(function, [dependencies]);
    
//title updates every time count updates

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });

//title doesn't update

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, []);


    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // }, []);
    

    //only whem count changes
    
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count]);

    
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count]);


    //each time a color or count changes

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count, color]);


    // remove useEfect still it works ...Need? => organised code, useEffect helps in controlling when the code sould run without useeffect it runs everytime the component rerenders
    //perform some code in certain situations

    // document.title = `Count: ${count} ${color}`;



    //cleanup

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            //some CLEANUP CODE
        }
    }, [count, color]);


    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick = {addCount}>Add</button>
            <button onClick = {subCount}>Sub</button>
            <br />
            <button onClick = {changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent;