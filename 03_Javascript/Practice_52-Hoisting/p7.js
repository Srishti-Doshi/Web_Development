//Block Scoping and var inside blocks
// var ignores blocks: it's function-scoped

if(true){
    var z = 43;
}

console.log(z); // still accessible


// let/const would restrict z to the block.

if(true){
    let a = 6;
}
console.log(a); //ReferenceError: a is not defined
