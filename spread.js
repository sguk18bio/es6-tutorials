// Spread operator (...)
const names = ["Hao", "Dat", "Thang"];

console.log(names); // Return an array.
console.log(...names); // Return all elements.

// Concat 2 arrays.
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

console.log(nums1, ...nums2); // Array in array.
console.log(nums1.concat(nums2)); // Using concat() method => return an array.
console.log(...nums1, ...nums2); // Return all elements.

// With functions.
const numbers = [3, 4, 5];
const add = (a, b, c) => {
  console.log(`Sum is: ${a + b + c}`);
};

add(3, 4, 5, 6); // 12 (6 is missing => 6 is assigned to 0).
add(3, 4, 5); // 12
add(3, 4); // NaN (7 + undefined = NaN).
add(...numbers); // 12
