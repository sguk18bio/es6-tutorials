const logNum = (num = 10) => {
  console.log(num);
};

// When calling without param, this function will use this default param.
logNum(); // 10

// When calling with param, this function will override this default param.
console.log();
logNum(15); // 15

// Another example
const showInfo = (name = "Hao", age = 20, gender = "male") => {
  console.log(`My name is ${name}, ${age} years old, gender is ${gender}.`);
};

console.log();
showInfo(); // My name is Hao, 20 years old, gender is male.

console.log();
showInfo("Dat"); // My name is Dat, 20 years old, gender is male.

console.log();
showInfo("Khanh", 24, "female"); // My name is Khanh, 24 years old, gender is female.
