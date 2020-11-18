// One instance of object literal
// const gladys = {
//   name: "Gladys",
//   age: 27,
// };

// Constructor method
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// console.log(this); // this outside of the global scope will be the window object

// const gladys = new Person("Gladys", 27);
// const enrique = new Person("Enrique", 26);

const gladys = new Person("Gladys", "1-11-1993");
