let a = 10;

if(true){
    console.log(a);  //ReferenceError
    
    let a = 26;
}


/*inner block has let a
✔ inner a shadows outer a
✔ inner a is in TDZ at console.log
→ ReferenceError */


/**If there is NO new let with the same name in a block:
You can use the outer variable.
If there IS a new let with the same name:
The outer one becomes hidden,
and the inner one causes TDZ until initialized. */

let b = 1;

{
  console.log(b); // ❌ ERROR
  let b = 2;
}

let c = 1;

{
  console.log(c); // ✅ prints 1
  c = 2
}

/*
let p = 10;

{
  console.log(p);
  var p = 20;
}
*/

/*
var q = 5;

{
  let q = 7;
  console.log(q);
}
 */