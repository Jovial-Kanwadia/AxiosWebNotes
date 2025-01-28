// Javascript is a high level, single threaded, garbage-collected, Just-in-time compiled, prototype-based, Multi-Paradigm programming language with a non-blocking even loop.

//==============Creating Objects in JavaScript==============
// 1) Using object initializers
// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
// };

// 2) Using a constructor function
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// const myCar = new Car("Eagle", "Talon TSi", 1993);

// 3) Using the Object.create() method
// It allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
//  Animal properties and method encapsulation
// const Animal = {
//     type: "Invertebrates", // Default value of properties
//     displayType() {
//         console.log(this.type);
//     },
// };

//  Create new animal type called animal1
// const cat = Object.create(Animal);
// cat.displayType(); // Logs: Invertebrates
// console.log("Cat :", cat);

//  Create new animal type called fish
// const fish = Object.create(Animal);
// fish.type = "Fishes";
// fish.displayType(); // Logs: Fishes
//================= Heap and stack memory===================
// const Obj1 = {
//     Firstname: "Jay",
//     Lastname: "Kanwadia"
// }
// const Obj2 = {
//     Age: 18,
//     nationality: "Indian"
// }
// if (Obj1 == Obj2) console.log("Same Object")
// else console.log("Different Object")

// const Obj3 = Obj1
// Obj3.Firstname = "Rahul";
// if (Obj1 == Obj3) console.log("Same Object")
// else console.log("Different Object")

// const Obj = { ...Obj1, ...Obj2 }
// console.log(Obj)


// ================= Prototypes===================
// function add(a, b) {
//     return a + b;
// }

// add.power = 5;
// console.log(add.power);
// console.log(add);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet1 = function () {
//         console.log(`Hey, my name is ${this.name}!`);
//     }
// }

// User.prototype.greet2 = function () {
//     console.log(`Hello, my name is ${this.name}!`);
// }

// const user1 = new User("John", 30);
// const user2 = new User("Jane", 25);
// user1.greet1();
// user2.greet2();


// ================= Async Javascript ===================
// Blocking and non-blocking code

// console.log("Hello");

// const codeBlocker = () => {
//     let i = 0;
//     while(i != 10000000000){
//         i++;
//     }
//     console.log("Done");
// }
// codeBlocker();

// console.log("World");

// We have to execute the codeBlocker function in a non-blocking manner.

// console.log("Hello");

// const codeBlocker = () => {
//     return Promise.resolve().then(() => {
//         let i = 0;
//         while (i != 10000000000) {
//             i++;
//         }
//         console.log("Done");
//     })
// }
// codeBlocker();


// const promiseOne = new Promise(function (resolve, reject) {
//     let i = 0;
//     while (i > 10000000000) {
//         i++;
//     }
//     if(i == 0) reject("Error in code");
//     else resolve({i});
// })
// promiseOne
// .then((num) => console.log("Then: ", num))
// .catch((error) => console.log("Catch:", error))
// .finally(() => console.log("The promise is either resolved or rejected"))


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ name: "JavaScript", age: 12 })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
// promise
//     .then((user) => {
//         console.log(user);
//         return user.name
//     }).then((username) => {
//         console.log(username);
//     }).catch(function (error) {
//         console.log(error);
//     }).finally(() => console.log("The promise is either resolved or rejected"))

// const codeBlocker = () => {
//     let i = 0;
//     while (i != 10000000000) {
//         i++;
//     }
//     return i;
// }

// console.log("Hello");

// const asyncFunction = () => {
//     const i = codeBlocker();
//     console.log(i);
// }
// asyncFunction();
// console.log("World")
