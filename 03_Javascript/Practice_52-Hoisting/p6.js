/*Classes

Class declarations are block-scoped and are not initialized during creation — they are in TDZ. Trying to use a class before its declaration causes ReferenceError. */

obj = new Foo(); //referenceError

class Foo{

}

//Classes behave like let/const in this respect.