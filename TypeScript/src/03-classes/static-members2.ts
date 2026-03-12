Math.random  // direct use of math class , no object creation


class Hero{
    static name = "Ant Man";
    age = 32;

    static getRandomNo(){
        return Math.random();
    }
}

Hero.name  // name = "Ant man"   , no need to create any instance to access name 

// Hero.age // does not work 

Hero.getRandomNo() // works


// some properties and methods which you want to use without creating objects => make them static