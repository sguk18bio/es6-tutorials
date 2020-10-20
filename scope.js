// Using "var" keyword.
for (var i = 0; i < 10; i++) {
  console.log(i); // Inside if scope, i = 9.
}

console.log(`Value of i = ${i}`); // Outside if scope, i = 10.

// Using "let" keyword.
for (let j = 0; j < 10; j++) {
  console.log(j); // Inside if scope, j = 9.
}

console.log(`Value of j = ${j}`); // Outside if scope, j is undefined.

// Using "const" keyword.
for (const k = 0; k < 10; k++) {
  console.log(`Value of k = ${k}`); // Value of k can't be changed.
}
