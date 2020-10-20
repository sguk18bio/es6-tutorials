// Add/subtract 2 numbers.
const calculate1 = (operator, a, b) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
    default:
      break;
  }
  return result;
};

console.log(`Result: ${calculate1("+", 5, 3)}`);

// Add/subtract 3 numbers.
const calculate2 = (operator, a, b, c) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = a + b + c;
      break;

    case "-":
      result = a - b - c;

    default:
      break;
  }
  return result;
};

console.log(`Result: ${calculate2("+", 5, 3, 3)}`);

// Add/subtract n numbers => so many params => using rest param.
const calculate3 = (operator, ...values) => {
  let result = 0;
  // values is an array.

  switch (operator) {
    case "+":
      for (let value of values) {
        // Loop through each number in array.
        result += value;
      }
      break;

    case "-":
      for (let value of values) {
        result -= value;
      }
      result += values[0] * 2; // Update first number in order not to be negative.

    default:
      break;
  }
  return result;
};

console.log(`Result: ${calculate3("-", 5, 3, 3, 1, 9)}`); // 5 numbers.
console.log(`Result: ${calculate3("+", 5, 3, 3, 1, 9, 11, 6)}`); // 7 numbers are still okay.
