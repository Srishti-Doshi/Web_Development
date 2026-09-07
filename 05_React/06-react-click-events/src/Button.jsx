// function Button(){

//     const handleClick = ()=>console.log("OOUCH!!")

//     return(
//         <button onClick={handleClick}>Click Me</button>
//     );
// }




// function Button(){

//     const handleClick2 = (name) => console.log(`${name} stop clicking me`)

//     return(
//         <button onClick={handleClick2("Srishti")}>Click Me</button>  //called right away without clicking
//     );
// }



// function Button(){

//     const handleClick2 = (name) => console.log(`${name} stop clicking me`)

//     return(

//         <button onClick={() => handleClick2("Srishti")}>Click Me</button>
        
//     );
// }



// function Button(){

//     let count = 0;

//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else{
//             console.log(`${name} stop clicking me!!`);
//         }
//     }

//     return(

//         <button onClick={() => handleClick("Srishti")}>Click Me</button>
        
//     );
// }


function Button(){
    // const handleClick = (e) => console.log(e);

    const handleClick = (e) => e.target.textContent = "OOUCH!!!!🙄";

    return(
        <button onClick = {(e)=> handleClick(e)}>Click Me</button>

        // <button onDoubleClick = {(e)=> handleClick(e)}>Click Me😊</button>
    );
}


export default Button