/* 
===========================Creating new objects=========================
You can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object by invoking that function with the new operator.

1) Using object initializers
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

2) Using a constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Eagle", "Talon TSi", 1993);

3) Using the Object.create() method
It allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
 Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    console.log(this.type);
  },
};

 Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

 Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

========================Accessing prop in objects=================
const mySym = Symbol("key1")
const jsUser = {
    name: "Jovial",
    [mySym]: "Symbol for key1" 
}

console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser[mySym])

==================Combining and comparing Objects===============
const Obj1 = {
    Firstname: "Jay",
    Lastname: "Kanwadia"
}
const Obj2 = {
    Age: 18,
    nationality: Indian
}

const Obj = {...Obj1, ...Obj2}
or
Syntax => Object.assign(target, source, source...)
const obj = Object.assign({}, Obj1, Obj2) 

In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

const fruit = { name: "apple" };
const fruitbear = { name: "apple" };
    fruit == fruitbear; // return false
    fruit === fruitbear; // return false

const FreshFruits = fruit
    Here fruit and FreshFruit are pointing to same object
    fruit == fruitbear; // return true
    fruit === fruitbear; // return true

=================Object Prototype==================
myObject.toString();

What are these extra properties, and where do they come from?
Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
When you try to access a property of an object:
If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

-------------Shadowing properties---------------
const myDate = new Date(1995, 11, 17);
console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};
myDate.getYear(); // 'something else!'

When we call getYear() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getYear() to myDate, then the version in myDate is called.
This is called "shadowing" the property.

---------------Setting a prototype----------------
1) Using Object.create
The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

Here we create an object personPrototype, which has a greet() method. We then use Object.create() to create a new object with personPrototype as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.


2) Using a Constructor
When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).
So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:

    Create custom Prototype for a constructor
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

    Create Constructor
function Person(name) {
  this.name = name;
}

    Combine the default prototype and your custom prototype
Object.assign(Person.prototype, personPrototype);

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

3) Own properties
The objects we create using the Person constructor above have two properties:
- A name property, which is set in the constructor, so it appears directly on Person objects
- A greet() method, which is set in the prototype.

const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

4) Methods created in or assigned to an object1 can be used by other objects by combining their prototypes or giving other objects the access to the prototype of object1

function hello(){
  console.log("hello")
}

const obj1 = { name: "obj1" };

obj1.hello = hello; 

const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.hello()); // hello

=================Imp Methods=======================
console.log(Object.keys(Obj))   
Output => ['Firstname', 'Lastname', 'Age', 'nationality']

console.log(Object.entries(Obj)) 
Output => [['Firstname','Jay'], ['Lastname', 'Kanwadia'], ['Age', 18], ['nationality','Indian']]

*/