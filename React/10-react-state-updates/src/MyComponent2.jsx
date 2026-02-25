//react-update-objects-state

import React, {useState} from "react";

function MyComponent2(){

    const [car, setCar] = useState({
        year: 2026,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event){
        // setCar({yaar: 2025});
        // setCar({...car, year: event.target.value}); 
        setCar(c => ({...c, year: event.target.value})); //safe updates

        //JS doesn't allow for duplicate keys
        //s pread operator allow us to retain previous properties
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value = {car.year} onChange = {handleYearChange}/>

            <br />

            <input type="text" value = {car.make} onChange = {handleMakeChange}/>

            <br />

            <input type="text" value = {car.model} onChange = {handleModelChange}/>
        </div>

    );
}

export default MyComponent2