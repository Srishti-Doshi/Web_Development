let x = 10;

function test() {
  console.log(x);
}

{
  let x = 20;
  test();
}


/*Functions capture variables from where they are defined, not where they are called.

This is called:

✅ lexical scope
✅ static scope
✅ closure behavior */