let numbers = [7, 10, 9, 25, 5];

console.log(`**map() method:`);

/* array.map() method:
Calls the function for each element of the array and returns the array of results.
It doesn't execute the function for array elements without values.
It doesn't change the original array.
It takes 3 arguments: value, index and array.
The "index" and "array" params can be omitted if not used in callback function.
Syntax:
  array.map((value, index, array) => {
    // Do something.
  });
*/

// Return an array which contains doubled value using array.map() method.
let result1 = numbers.map((number) => number * 2);

console.log(result1); // [14, 20, 18, 50, 10]

console.log(`**filter() method:`);

/* array.filter() method:
Creates a new array with array elements that passes a test.
It doesn't change the original array.
It takes 3 arguments: value, index and array.
The "index" and "array" params can be omitted if not used in callback function.
Syntax:
  array.filter((value, index, array) => {
    // Do something.
  });
*/

// Create a new array from elements with a value larger than 6 using array.filter() method.
let result2 = numbers.filter((number) => number > 6);

console.log(result2); // [7, 10, 9, 25]

console.log(`**reduce() method:`);

/* array.reduce() method:
Runs a function on each array element to produce (reduce it to) a single value.
It takes 4 arguments: accumulator, value, index and array.
It works from left-to-right in the array.
It doesn't reduce the original array.
The "index" and "array" params can be omitted if not used in callback function.
Syntax:
  array.reduce((accumulator, value, index, array) => {
    // Do something.
  }, [initialValue]);
The "initialValue" is optional.
If the "initialValue" is not set, it equals to the "accumulator" by default.
*/

// Find the sum of all numbers in an array using array.reduce() method.
let result3 = numbers.reduce((total, number) => total + number);

console.log(`Without initialValue: ${result3}`); // initialValue = 0 => (0 + 7 + 10 + 9 + 25 + 5) = 56.

// Now set the initialValue = 50.
let result4 = numbers.reduce((total, number) => total + number, 50);
console.log(`With initialValue: ${result4}`); // initialValue = 50 => (50 + 7 + 10 + 9 + 25 + 5) = 106.
