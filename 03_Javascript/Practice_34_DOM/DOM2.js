console.log("Tinka");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

//depends on order
// boxes[2].style.backgroundColor = "red";

//ID Selector -> selects all element with id = 'redbox'
// document.getElementById("redbox").style.backgroundColor = 'red';

//Query Selector -> selects 1st box with class "box" -> returns 1st box that matches
// document.querySelector(".box").style.backgroundColor = "green"; 

//Query Selector ALl -> selects All box with class "box" -> returns a node list , so we need to access all its elements one by one and set its style
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"; 
})

// get Elements By Tag Name ->returns html collection
console.log(document.getElementsByTagName("div"));

e = document.getElementsByTagName("div");

console.log(e[4].matches("#redbox"));
console.log(e[3].matches("#redbox"));


console.log(e[3].closest("#redbox"));
console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));

console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(e[8]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
