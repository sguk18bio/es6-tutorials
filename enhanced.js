/* Declare an object.
const getCourseInfo = (name, time, isFree) => {
  return {
    name: name,
    time: time,
    isFree: isFree,
  };
};
*/

// Properties' values shorthand.
const getCourseInfo = (name, time, isFree) => {
  return { name, time, isFree };
};

console.log(getCourseInfo("React", 25, false)); // { name: 'React', time: 25, isFree: false }

// Methods are properties.
const getInfo = (name, age, gender) => {
  return {
    name,
    age,
    gender,

    // Methods. Never use arrow functions to declare objects' methods.
    showInfo1: function () {
      console.log(`${name} - ${age} - ${gender}`);
    },

    // Remove "function" keyword.
    showInfo2() {
      console.log(`${name} - ${age} - ${gender}`);
    },
  };
};

let info = getInfo("Hao", 20, "male"); // Stored in a variable.
info.showInfo1(); // Hao - 20 - male
info.showInfo2(); // Hao - 20 - male

// Computed Property Names.

// In the beginning, myClass = { classID, className, classType }
// Using prefix "class". Also supports template strings.
let myPrefix = "class";
let myClass = {
  [`${myPrefix}Id`]: "201",
  [`${myPrefix}Name`]: "React",
  [`${myPrefix}Type`]: "normal",
};

console.log(myClass); // { classId: '201', className: 'React', classType: 'normal' }
