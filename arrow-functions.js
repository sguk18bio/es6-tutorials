// Regular functions.
function getName1(name) {
  console.log(name);
}

getName1("Hao"); // Hao.

// Function expressions.
const getName2 = function (name) {
  console.log(name);
};

console.log();
getName2("Hao"); // Hao.

// Arrow functions.

/* const getName3 = (name) => {
     console.log(name);
   }; 
*/

// Can remove (), {} and "return" keyword if this function only has 1 param and 1 statement.
const getName3 = (name) => console.log(name);

console.log();
getName3("Hao"); // Hao.

// "this" keyword in regular functions.
let person1 = {
  name: "Hao",

  checkThis() {
    setTimeout(function () {
      console.log(this); // Timeout object.
    }, 2000);
  },
};

person1.checkThis();

// "this" keyword in arrow functions.
let person2 = {
  name: "Khanh",

  checkThis() {
    setTimeout(() => {
      console.log(this); // person2 object.
    }, 2000);
  },
};

person2.checkThis();
