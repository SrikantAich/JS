// in JavaScript, arrays are not necessarily homogeneous. That means they can contain elements of different types.
// In JavaScript, arrays are a special type of object. They are used to store multiple values in a single variable.
// Arrays are zero-indexed, meaning the first element is at index 0.

const arr = [1, 2, { a: 10 }];
const shallowCopy = [...arr];

shallowCopy[2].a = 99;
console.log(arr[2].a); // 👉 99 (shared reference)
console.log(shallowCopy[2].a); // 👉 99 (shared reference)



