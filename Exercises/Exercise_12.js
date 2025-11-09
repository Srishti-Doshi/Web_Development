console.log("Script.js is initializing..");
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
console.log(boxes);

function getRandomColor(){
    let val1 = Math.floor(0 + Math.random()*(255 - 0 + 1));  //Math.random() -> 0 - 1 , a + Math.random()(b-a)-> a - b
    let val2 = Math.floor(0 + Math.random()*(255 - 0 + 1));  //Math.floor(a + Math.random() * (b - a + 1)) -> [0,255]
    let val3 = Math.floor(0 + Math.random()*(255 - 0 + 1));  //Math.ceil(0 + Math.random()*255); -> (0-255]
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})