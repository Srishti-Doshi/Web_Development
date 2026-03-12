"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payment_1 = require("./payment");
(0, payment_1.addPayment)(12);
var payment_2 = require("./payment");
var a = new payment_2.default(120);
console.log(a);
