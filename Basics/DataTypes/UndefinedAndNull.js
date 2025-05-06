// 1.4 Undefined
// Variable declared but no value assigned — often accidental
let undef;
let undef2 = undefined;         // Explicit, but not recommended

console.log("undef (uninitialized variable) = " + undef); // undefined

// Use case: Checking if a value has been set or loaded yet

// 1.7 Null
// Represents "no value" intentionally — different from undefined
let temperature = null;

console.log("temperature (null value) = " + temperature); // null

// Use case: Resetting fields, clearing selections, placeholder for future data

console.log(typeof null)//object
console.log(typeof undefined)//undefined




