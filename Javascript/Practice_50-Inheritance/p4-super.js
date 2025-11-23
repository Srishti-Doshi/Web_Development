/*Why super.method() is used when overriding a method
Key facts:
A child class can define a method with the same name as the parent.

This overrides (replaces) the parent method.

If you still want the parent's version to execute, you must explicitly call it using super.method(). */

class A{
    greet(){
        console.log('A good Morning');
    }
}

class B extends A{
    greet(){
        super.greet(); //calls parents method
        console.log('B Good Afternoon');
    }
}

obj = new B();
obj.greet();

/*We use super.method() to explicitly invoke the parent version of a method when the child overrides it and still needs the parent behavior. */

/*About super():

Required in subclass constructor
Must run before this
Reason: parent constructor initializes the instance

About super.method():

Used when overriding a method
Calls the parent’s implementation
Reason: child overrides hide parent methods */