/*
Case Study: Type Aliases in TypeScript

In a warehouse inventory system, data such as products, orders,
customers, and locations must be reused across different parts
of the application. Type aliases help define clear, reusable
templates for such data, making the code easy to read and maintain.
*/

export {}; // keeps this file isolated from other case studies


// -------------------- PRIMITIVE TYPE ALIAS --------------------

// Alias for product identifier
type ProductCode = number;

let itemIdValue: ProductCode = 101;


// -------------------- UNION TYPE ALIAS --------------------

// Alias for order status
type ShipmentStatus = "pending" | "shipped" | "returned";

let currentStatusValue: ShipmentStatus = "shipped";


// -------------------- TUPLE TYPE ALIAS --------------------

// Alias for warehouse location [aisle, shelf]
type StorageLocation = [aisle: number, shelf: number];

let locationValue: StorageLocation = [2, 15];


// -------------------- OBJECT TYPE ALIAS --------------------

// Alias for product structure
type WarehouseProduct = {
  id: ProductCode;
  name: string;
  location: StorageLocation;
  price: number;
};

let productItemValue: WarehouseProduct = {
  id: itemIdValue,
  name: "Storage Box",
  location: locationValue,
  price: 499.99
};


// -------------------- FUNCTION TYPE ALIAS --------------------

// Alias for logging function
type LogFunction = (message: string) => void;

const systemLogger: LogFunction = (msg) => {
  console.log("[LOG]: " + msg);
};

systemLogger("Product added to inventory");


// -------------------- GENERIC TYPE ALIAS --------------------

// Generic container alias
type DataContainer<T> = {
  value: T;
  timestamp: Date;
};

let productContainerValue: DataContainer<WarehouseProduct> = {
  value: productItemValue,
  timestamp: new Date()
};

let productIdContainerValue: DataContainer<ProductCode> = {
  value: 505,
  timestamp: new Date()
};


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// 1. Primitive alias for Customer ID
type CustomerID = string;

// 2. Object alias for Customer
type CustomerInfo = {
  id: CustomerID;
  name: string;
  email?: string;
};

let customerOneValue: CustomerInfo = {
  id: "C001",
  name: "Srishti"
};

let customerTwoValue: CustomerInfo = {
  id: "C002",
  name: "Tiku",
  email: "tiku@example.com"
};


// 3. Function type alias for order processing callback
type OrderStatusHandler = (status: ShipmentStatus) => void;

const processOrderStatus: OrderStatusHandler = (status) => {
  systemLogger("Order status updated to: " + status);
};

processOrderStatus("pending");


// 4. Using generic alias to wrap Customer object
let customerContainerValue: DataContainer<CustomerInfo> = {
  value: customerOneValue,
  timestamp: new Date()
};

console.log(customerContainerValue);


/*
Conclusion:
Type aliases provide meaningful names for complex types such as
objects, unions, tuples, functions, and generics. They reduce
duplication, improve readability, and make large systems easier
to maintain and scale.
*/
