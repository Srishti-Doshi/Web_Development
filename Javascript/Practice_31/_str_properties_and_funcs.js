//Strings -> Immutable
let a = "Apple";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.length);
console.log(a.slice(1,3));
console.log(a.replace("p",'12'));
let b = ' Shake';
console.log(a.concat(b, " Healthy"));
console.log(a+b);

let h = "      Puuung   ";
console.log(h.trim()); //Remove Whitespaces

//There are many functions of string explore them on console by inspecting any website.

console.log("sri\"".length);
console.log(a.includes("pp"));
console.log(a.includes("ll"));
console.log(a.startsWith("A"));
console.log(a.startsWith("a"));
console.log(a.endsWith("le"));

console.log(a.toLowerCase());
console.log(a);

let text = "Please give RS 1000";
let amount = text.slice(15);
console.log(text);
console.log(amount);

text[4] = 'A';
console.log(text[4]);
