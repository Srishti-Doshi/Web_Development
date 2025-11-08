// Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
let arr = ["#02080fff", "#ac6fa7ff", "#d3dd15ff","#dc2d2dff", "#b7cce2ff", "#987654","#ed1cdcff", "#f0ae59ff", "#15dd47ff","#4dd3e7ff", "#9c41c0ff", "#2f624dff"]
let color = Math.floor(Math.random()*11);

d = document.getElementsByClassName("box");
console.log(d[0])

for (let i = 0; i < 5; i++) {
    d[i].style.backgroundColor=arr[Math.floor(Math.random()*11)];
}