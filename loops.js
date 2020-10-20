// Arrays.
let todos = ["eat", "sleep", "code", "repeat"];

// Loop using regular for ().
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

// Using for (let index in array).
console.log();

for (let index in todos) {
  // console.log(index); // index (0, 1, 2, 3).
  console.log(`${index}: ${todos[index]}`); // index: value (0: "eat", 1: "sleep",...).
}

// Using for (let item of array).
console.log();

for (let item of todos) {
  console.log(item); // value ("eat", "sleep", "code", "repeat").
}

// Objects.
let person = {
  name: "Hao",
  age: 20,
  gender: "male",
};

// Using for (let index in object).
console.log();

for (let index in person) {
  // console.log(index); // key (name, age, gender).
  // console.log(`${index}: ${person.index}`); // key: undefined.
  console.log(`${index}: ${person[index]}`); // key: value (name: Hao,...).
}

// Using for (let item of object).
/*
for (let item of person) {
  console.log(item); // Error.
}
*/

// => Never use for (let item of object) for objects because object is not iterable.

// array.foreach() method.
console.log();

let result = todos.forEach((todo) => console.log(todo));
console.log(result);
