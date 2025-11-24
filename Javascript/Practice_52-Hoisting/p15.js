let a = 1;

function show() {
  console.log(a);
}

function wrapper() {
  let a = 2;
  show();
}

wrapper();


//A function’s variables come from where it was written, not where it is called.