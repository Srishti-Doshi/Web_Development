//“Too many manual object creations → make it automatic”

// IoC Container => a tool that automatically does Dependency Injection for you

// “IoC container automates dependency injection by creating and injecting dependencies automatically, so developers don’t need to manually wire objects.”

//Inversion of control

// “When the system grows, manually creating and passing many dependencies becomes complex and error-prone. So we use IoC (Inversion of Control), where an external system (IoC container) automatically creates and injects dependencies for us.”


import "reflect-metadata";
import { Container, Inject, Service } from "typedi";
// “@Service() registers a class with the IoC container so the container can create and manage its instance automatically.”

@Service()
class Milk {
  pour() {
    console.log("Milk added");
  }
}

@Service()
class Coffee {
  constructor(@Inject(() => Milk) private milk: Milk) {}

  makeCoffee() {
    console.log("Making coffee...");
    this.milk.pour();
  }
}

let coffee = Container.get(Coffee);  //CONTAINER creates object : Give me a ready-to-use object (with dependencies injected)