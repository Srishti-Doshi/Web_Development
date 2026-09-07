interface Drink {
  serve(): void;
}

class Latte implements Drink {
  serve() {
    console.log("Latte");
  }
}

class Espresso implements Drink {
  serve() {
    console.log("Espresso");
  }
}

// --------------------
// Order Page
// --------------------
function orderDrink(type: string) {
  let drink: Drink;

  if (type === "latte") {
    drink = new Latte();
  } else if (type === "espresso") {
    drink = new Espresso();
  } else {
    throw new Error("Unknown drink");
  }

  drink.serve();
}

// --------------------
// Admin Panel
// --------------------
function previewDrink(type: string) {
  let drink: Drink;

  if (type === "latte") {
    drink = new Latte();
  } else if (type === "espresso") {
    drink = new Espresso();
  } else {
    throw new Error("Unknown drink");
  }

  console.log("Preview:");
  drink.serve();
}

// --------------------
// API Handler
// --------------------
function handleRequest(type: string): Drink {
  let drink: Drink;

  if (type === "latte") {
    drink = new Latte();
  } else if (type === "espresso") {
    drink = new Espresso();
  } else {
    throw new Error("Unknown drink");
  }

  return drink;
}

// --------------------
// Usage
// --------------------
orderDrink("latte");
previewDrink("espresso");

const d = handleRequest("latte");
d.serve();