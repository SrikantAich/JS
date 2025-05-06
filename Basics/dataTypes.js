// JavaScript Data Types
// ----------------------
// 1. Primitive Data Types (stored by value, immutable)
// 2. Non-Primitive Data Types (stored by reference, mutable)


// 1. Primitive Data Types
// -----------------------

// 1.1 Number
// Used for any kind of numeric calculation — prices, scores, ages, etc.
let num = 10;                   // Integer
let num2 = 10.5;                // Floating-point number
let num3 = 10e5;                // Exponential: 10 * 10^5 = 1000000
let num4 = 10e-5;               // Exponential: 10 * 10^-5 = 0.0001
let notANumber = NaN;           // Result of invalid arithmetic (e.g., "abc" * 2)
let inf = Infinity;            // Result of division by 0
let negInf = -Infinity;

console.log("num3 (Exponential 10e5) = " + num3);    // 1000000
console.log("num4 (Exponential 10e-5) = " + num4);   // 0.0001
console.log("notANumber = " + notANumber);          // NaN
console.log("Infinity = " + inf);                   // Infinity

// Use case: Calculating total price, interest rates, temperature, etc.


// 1.2 String
// Used for text data: names, messages, labels, HTML content, etc.
let str = "Hello";
let str2 = 'World';
let str3 = `Hello ${str2}`; // Template literal — useful for combining variables

console.log("str3 (Template literal) = " + str3);  // Hello World

// Use case: Chat messages, form input, displaying data on UI.


// 1.3 Boolean
// Represents true/false — used in logic, conditions, toggles, validations.
let bool = true;
let bool2 = false;
let bool3 = Boolean(1);         // true — 1 is truthy
let bool4 = Boolean(0);         // false — 0 is falsy
let bool5 = Boolean("Hi");      // true — non-empty string is truthy
let bool6 = Boolean("");        // false — empty string is falsy

console.log("bool3 (Boolean of 1) = " + bool3);     // true
console.log("bool6 (Boolean of '') = " + bool6);   // false

// Use case: User logged in? Button enabled? Form valid?


// 1.4 Undefined
// Variable declared but no value assigned — often accidental
let undef;
let undef2 = undefined;         // Explicit, but not recommended

console.log("undef (uninitialized variable) = " + undef); // undefined

// Use case: Checking if a value has been set or loaded yet


// 1.5 Symbol
// Used for creating unique identifiers — especially as object keys in libraries/frameworks
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("sym1 === sym2 = " + (sym1 === sym2));  // false — Symbols are always unique

// Use case: Hidden object properties, internal framework logic


// 1.6 BigInt
// For very large integers beyond the safe range of Number
let bigInt = BigInt(9007199254740991);  // Max safe integer
let bigInt2 = BigInt(1e20);             // Very large integer

console.log("bigInt2 (Large integer) = " + bigInt2); // 100000000000000000000n

// Use case: Cryptography, scientific calculations, financial data


// 1.7 Null
// Represents "no value" intentionally — different from undefined
let temperature = null;

console.log("temperature (null value) = " + temperature); // null

// Use case: Resetting fields, clearing selections, placeholder for future data


// 1.8 Object
// A collection of key-value pairs — used to group related data
let user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};

console.log("user.name = " + user.name);           // Alice
console.log("user['age'] = " + user["age"]);       // 25

// Use case: Storing user profiles, product info, API responses


// 1.9 Array
// Ordered list — index-based — can hold any data types
let scores = [95, 87, 78];
let items = ["apple", "banana", "grape"];
let mixed = [true, 42, "hello"];

console.log("scores[0] = " + scores[0]);            // 95
console.log("items[2] = " + items[2]);              // grape
console.log("typeof scores = " + typeof scores);    // object

// Use case: Lists of users, products, messages, notifications


// Summary: typeof checks
console.log("typeof num = " + typeof num);         // number
console.log("typeof str = " + typeof str);         // string
console.log("typeof bool = " + typeof bool);       // boolean
console.log("typeof undef = " + typeof undef);     // undefined
console.log("typeof null = " + typeof null);       // object (quirk in JavaScript)
console.log("typeof sym1 = " + typeof sym1);       // symbol
console.log("typeof bigInt = " + typeof bigInt);   // bigint
console.log("typeof user = " + typeof user);       // object
console.log("typeof scores = " + typeof scores);   // object

