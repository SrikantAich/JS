let basket = ["apple", "banana", "cherry", "date", "fig", "grape"];
console.log("1. Basket length:", basket.length);

// 2. Second last fruit
console.log("2. Second last fruit:", basket.at(-2));

// 3. Convert to string
console.log("3. Basket to string:", basket.toString());

// 4. Join with " | "
console.log("4. Joined with | :", basket.join(" | "));

// 5. Remove last fruit
basket.pop();
console.log("5. After removing last fruit:", basket);

// 6. Add "kiwi" to end
basket.push("kiwi");
console.log("6. After adding 'kiwi':", basket);

// 7. Remove first fruit
basket.shift();
console.log("7. After removing first fruit:", basket);

// 8. Add "mango" to beginning
basket.unshift("mango");
console.log("8. After adding 'mango' to start:", basket);

// 9. Delete second item (index 1)
delete basket[1];
console.log("9. After deleting second item:", basket);

// 10. Merge with second basket
let secondBasket = ["orange", "papaya"];
basket = basket.concat(secondBasket);
console.log("10. After merging with second basket:", basket);

// 11. Replace 2 items at index 3 with "peach" and "plum"
basket.splice(3, 2, "peach", "plum");
console.log("11. After replacing 2 fruits:", basket);

// 12. Extract 3 middle fruits
let middleIndex = Math.floor(basket.length / 2) - 1;
let middleFruits = basket.slice(middleIndex, middleIndex + 3);
console.log("12. Middle 3 fruits:", middleFruits);
