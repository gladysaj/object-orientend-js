// One instance of object literal
// const gladys = {
//   name: "Gladys",
//   age: 27,
// };

// Constructor method
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// console.log(this); // this outside of the global scope will be the window object

// const gladys = new Person("Gladys", 27);
// const enrique = new Person("Enrique", 26);

// const gladys = new Person("Gladys", "1-11-1993");

// String
// const name1 = "Jeff";
// const name2 = new String("Jeff"); // result will be an object
// // name2.foo = "bar";

// console.log(name2);

// console.log(typeof name1);

// if (name1 === "Jeff") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Functiones
// const getSum1 = function (x, y) {
//   return x + y;
// };

// const getSum2 = new Function("x", "y", "return 1 + 1");

// getSum1(1, 1);

// // Objects
// const john = { name: "John" };
// const jonhn2 = new Object({ name: "John" });

// // Arrays
// const arr1 = [1, 2, 3];
// const arr2 = new Array[(1, 2, 3)]();

// // Regular expressions
// const re1 = /\w+/;
// const re2 = new RegExp("\\w+");

//Object.prototype
//Person.prototype

// Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function () {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// // }

// const john = new Person("John", "Doe", "8-12-1990");

// // Calculate age
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// console.log(john.calculateAge());

// // Get full name
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(john.getFullName);

// // Gets married
// Person.prototype.getsMarried = function (newLastName) {
//   this.lastName = newLastName;
// };

// john.getsMarried("Smith");

// console.log(john.hasOwnProperty("firstName")); // you can access them by the __proto__ property
