let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>I got clicked!! (click) Yeah!!</b>";
})

button.addEventListener("dblclick", ()=>{
    alert("I was double clicked..(dblclick)");
})

button.addEventListener("contextmenu", ()=>{
    alert("Trying to right click! (contextmenu)");
})

document.addEventListener("keydown", (e)=>{  //2nd argument -> event object
    // console.log(e)
    console.log(e.key, e.keyCode)
})
//List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events