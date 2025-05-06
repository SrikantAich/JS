// JavaScript Data Types
// ----------------------
// 1. Primitive Data Types (immutable, stored by value)
// 2. Non-Primitive Data Types (mutable, stored by reference)


// 1. Primitive Data Types
// -----------------------

// 1.1 Number
let num = 10;              // Integer number
let num2 = 10.5;           // Floating-point number
let num3 = 10e5;           // Exponential notation (10 * 10^5 = 1000000)
let num4 = 10e-5;          // Exponential notation (10 * 10^-5 = 0.0001)
let num5 = 10.5e5;         // Exponential notation (10.5 * 10^5 = 1050000)
let num6 = 10.5e-5;        // Exponential notation (10.5 * 10^-5 = 0.000105)
let num7 = 10.5e+5;        // Same as above, + sign is optional in exponent

// Special numeric values
let inf = Infinity;         // Infinity (e.g., 1 / 0)
let negInf = -Infinity;    // Negative Infinity
let notANumber = NaN;      // "Not a Number" (e.g., "abc" * 3)


// 1.2 String
let str = "Hello World";   // Double-quoted string
let str2 = 'Hello World';  // Single-quoted string
let str3 = `Hello World`;  // Template literal (allows interpolation like `${var}`)


// 1.3 Boolean
let bool = true;           // Boolean true
let bool2 = false;         // Boolean false
let bool3 = Boolean(true);       // true
let bool4 = Boolean(false);      // false
let bool5 = Boolean(1);          // true (1 is truthy)
let bool6 = Boolean(0);          // false (0 is falsy)
let bool7 = Boolean("Hello");    // true (non-empty string is truthy)
let bool8 = Boolean("");         // false (empty string is falsy)
console.log(bool8);              // false


// 1.4 Undefined
let undef;                      // Variable declared but not assigned => undefined
let undef2 = undefined;         // Explicit assignment of undefined (not recommended)


// 1.5 Symbol
// Unique and immutable identifier, often used as object property keys
let sym = Symbol();             // Symbol without description
let sym2 = Symbol("Hello");     // Symbol with description
let sym3 = Symbol("Hello");     // Different symbol, even with same description
console.log(sym2 === sym3);     // false - every Symbol is unique


// 1.6 BigInt
// Used for integers beyond Number.MAX_SAFE_INTEGER
let bigInt = BigInt(10);        // BigInt from integer
// let bigInt2 = BigInt(10.5);  // ❌ Error: BigInt only accepts integers
let bigInt3 = BigInt(1e6);      // BigInt from exponential integer (1e6 = 1000000n)


// 1.7 Null
let nul = null;                 // null explicitly means "no value"
let nul2 = null;                // Used to intentionally clear or reset a variable
// Example use case: null to represent unknown temperature
let temperature = null;         // Temperature not recorded yet


// 1.8 Object
// Objects are collections of key-value pairs
let obj = { name: "John", age: 30 };      // Object with 2 properties
let obj2 = { name: "John", age: 30 };     // Another object with same keys/values

// Accessing properties
console.log(obj.name);         // "John"
console.log(obj["age"]);       // 30


// 1.9 Array
// Arrays are ordered collections of values
let arr = [1, 2, 3, 4, 5];     // Array of numbers
let arr2 = ["a", "b", "c"];    // Array of strings
let arr3 = [true, 42, "Hi"];   // Mixed data types

// Accessing array elements
console.log(arr[0]);           // 1
console.log(arr2[2]);          // "c"

// Arrays are objects under the hood
console.log(typeof arr);       // "object"


// Summary Notes
// -------------
// Primitive Data Types:
// - Stored by value
// - Immutable
// - Includes: Number, String, Boolean, Null, Undefined, Symbol, BigInt

// Non-Primitive Data Types:
// - Stored by reference
// - Mutable
// - Includes: Object, Array, Function

// Use `typeof` operator to check the type of a value
console.log(typeof num);       // "number"
console.log(typeof str);       // "string"
console.log(typeof bool);      // "boolean"
console.log(typeof undef);     // "undefined"
console.log(typeof nul);       // "object" (this is a historical JavaScript quirk)
console.log(typeof sym);       // "symbol"
console.log(typeof bigInt);    // "bigint"
console.log(typeof obj);       // "object"
console.log(typeof arr);       // "object"
