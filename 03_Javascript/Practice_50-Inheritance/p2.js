//Inheritance -> Inheritance is passing down properties & methods from parent class to child class.

// there is no core need of classes and related concepts and same work done by thses can be done using functions but classes give better way to do the same work
class parent{
    hello(){
        console.log('hello');    
    }
}

class child extends parent{

}

obj = new child();
obj.hello();

