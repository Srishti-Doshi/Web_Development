say();

function say(){
  console.log("A");
}

var say = function(){
  console.log("B");
}

/*function say() {       // function declaration hoisted first
  console.log("A");
}

var say;               // var declaration hoisted but ignored because
                       // 'say' already exists from the function

// Now execution starts

say();                 // this runs now

say = function(){      // assignment happens AFTER the call
  console.log("B");
};
 */
