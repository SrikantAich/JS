
// You are managing a digital *fruit basket* for a grocery store application. You start with the following array:

// javascript
// let basket = ["apple", "banana", "cherry", "date", "fig", "grape"];


// Perform the following tasks in order. Print the basket or the result after *each step*:

// 1. Display the total number of fruits in the basket.
// 2. Retrieve the second last fruit in the basket.
// 3. Convert the basket to a string and display it.
// 4. Display the fruits as a single string, separated by " | ".
// 5. A customer eats the last fruit. Remove it.
// 6. Add a "kiwi" to the end of the basket.
// 7. Remove the first fruit from the basket.
// 8. A fresh "mango" arrives—add it to the beginning of the basket.
// 9. One of the fruits in the second position has spoiled. Remove it without affecting the array length.
// 10. A second basket arrives:

// javascript
// let secondBasket = ["orange", "papaya"];


// Merge the two baskets into one.
// 11\. Replace two fruits starting from the fourth position with "peach" and "plum".
// 12\. Extract the three middle fruits from the current basket into a new array and display them.


let basket = ["apple", "banana", "cherry", "date", "fig", "grape"];

console.log("Total number of fruits in the basket:", basket.length);

console.log("Second last fruit in the basket:", basket[basket.length - 2]);

let stringBasket = basket.toString();   

console.log("Basket as a string:", stringBasket);

let joinedBasket = basket.join(" | ");

basket.pop();

console.log(" A customer eats the last fruit. Remove it:", basket);

basket.push("kiwi");
console.log("Add a 'kiwi' to the end of the basket:", basket);

basket.shift();
console.log("Remove the first fruit from the basket:", basket);

basket.unshift("mango");
console.log("A fresh 'mango' arrives—add it to the beginning of the basket:", basket);

delete basket[1];
console.log("One of the fruits in the second position has spoiled. Remove it without affecting the array length:", basket);

let secondBasket = ["orange", "papaya"];

basket = basket.concat(secondBasket);
console.log("Merge the two baskets into one:", basket);

basket.splice(3,2, "peach", "plum");
console.log("Replace two fruits starting from the fourth position with 'peach' and 'plum':", basket);   