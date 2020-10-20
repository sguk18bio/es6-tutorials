let course = ["001", 25];

/* Normally assign.
   let id = person[0];
   let name = person[1];
   let gender = person[2]; 
*/

// console.log(`${id} - ${name} - ${gender}`);

// Using destructuring (with arrays): ordered required.
let [id, time] = course; // 001 - 25
// let [time, id] = course; // 25 - 001

console.log(`${id} - ${time}`);

// Using destructuring (with objects): unordered.
let info = {
  name: "Khanh",
  age: 24,
  gender: "female",
};

let { name, age, gender } = info; // Khanh - 24 - female
// let { gender, name, age } = info; // Khanh - 24 - female

console.log(`${name} - ${age} - ${gender}`);
