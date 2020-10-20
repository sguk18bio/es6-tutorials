/* Template string: `Something`
   - Can contain variables, expressions: `${variable}`; `{expression}`
   - Allow line-breaking and escape characters:
   `I'm Hao
    and I'm 20.`
   - Support HTML tags:
   `<div id="demo">
      <p>Hello</p>
    </div>`
*/

// Normal way.
const showInfo1 = (name, age) => {
  console.log("My name is " + name + " and I'm " + age + " years old.");
};

showInfo1("Hao", 20);

// Using template string.
const showInfo2 = (name, age) => {
  console.log(`My name is ${name} and I'm ${age} years old.`);
};

showInfo2("Hao", 20);

// With HTML tags.
document.getElementById("demo").innerHTML = `
<div style="width: 100%; height: 100px; background-color: navy">
  <p style="color: white">Demo</p>
</div>
`;
