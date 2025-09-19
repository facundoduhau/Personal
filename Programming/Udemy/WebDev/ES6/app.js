// Default Import

import myMultiply from "./mathOperations.js"

// Named Import

import {mySubtract, mySum} from "./mathOperations.js";

console.log(myMultiply(2,5));
console.log(mySubtract(4-3));
console.log(mySum(3,2));

// KEEP IN MIND:
// ES6 Modules don't work on Node
// Node uses CommonJS by default
// If dessired, editing JSON file makes this file structure work