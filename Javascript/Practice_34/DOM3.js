console.log(document.querySelector(".box"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hidden);
document.querySelector(".container").hidden = true;
document.querySelector(".container").hidden = false;
document.querySelector(".box").innerHTML = "Hey I am Tinka";
document.querySelector(".box").innerText = "Hey I am Tinku";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style", "display: inline");

console.log(document.querySelector(".box").attributes);

document.querySelector(".box").removeAttribute("style");

//document.designMode="on";  //Go to any website and can change js

console.log(document.querySelector(".box").dataset);  // printing Custom data attributes

