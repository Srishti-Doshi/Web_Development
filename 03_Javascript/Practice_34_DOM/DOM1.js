console.log("Hello Puuung");
console.log(document.body);

console.log(document.body.childNodes); // returns a list of child nodes
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);

let cont = document.body.childNodes[1];
console.log(cont.firstChild);
console.log(cont.lastChild);

console.log(cont.firstElementChild);
console.log(cont.lastElementChild.style.backgroundColor = "red");
console.log(cont.lastElementChild.style.backgroundColor = "cyan");
console.log(cont.lastElementChild.parentElement);

console.log(document.body.firstElementChild.childNodes);  //list
console.log(document.body.firstElementChild.children);   //collection
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[0].style.color = "pink");

console.log(document.body.firstElementChild.children[0].nextElementSibling);

console.log(document.body.firstElementChild.children[1].previousElementSibling);

console.log(document.body.firstElementChild.children[1].previousSibling); //text node

console.log(document.body.children)
console.log(document.body.children[1].rows)
console.log(document.body.children[1].columns) //undefined -> doesn't exist

