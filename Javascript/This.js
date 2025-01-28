/* 
==============Binding==================
In JavaScript, "binding" refers to the process of associating a value with a variable name. This process creates a reference that allows you to access and manipulate the value through the variable name. Bindings can occur through various means such as variable declarations, function parameters, and object properties

1) Variable Declaration:
When you declare a variable using keywords like let, const, or var, you are creating a binding between the variable name and a value.

2) Function Parameters:
When you define a function with parameters, those parameters act as bindings to the arguments passed when the function is called.
function greet(name) {
    console.log("Hello, " + name + "!");
}
Here, name is a binding that will be assigned the value passed when the greet function is called.

3) Object Properties:
Object properties also represent bindings between property names and values.

Mutable Bindings:
Bindings created with let and var are mutable, meaning you can change the value associated with them.
Immutable Bindings:
Bindings created with const are immutable, meaning you cannot reassign them to a different value after initialization.


=========================='this' in js===========================
In JavaScript, the this keyword refers to the context within which a function is executed. It can have different values depending on how the function is called.

1) Global Context: When this is used outside of any function, it refers to the global object. In a web browser, the global object is usually window.

console.log(this); // Points to the global object (window in a browser)

2) Function Context: When this is used within a regular function (not an arrow function), its value is determined by how the function is called. If the function is called as a method of an object, this refers to that object.

const obj = {
  prop: 'Hello',
  method: function() {
    console.log(this.prop); // 'Hello'
    console.log(this)
  }
};
obj.method();

3) Constructor Context: When a function is used as a constructor with the new keyword, this refers to the newly created instance of the object.

function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // 'Alice'

4) Explicit Binding: You can explicitly specify the value of this using methods like call(), apply(), or bind().

function greet() {
  console.log(`Hello, ${this.name}!`);
}
const obj = { name: 'Alice' };
greet.call(obj); // 'Hello, Alice!'

5) Arrow Functions: Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical context.

const obj = {
  prop: 'Hello',
  method: () => {
    console.log(this.prop); // undefined
  }
};
obj.method();

----------------How 'this' works?-------------
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis; 
obj2.getThis = getThis;

Both obj1 and obj2 are given a new property getThis, which references the getThis function. This effectively makes getThis a method of both obj1 and obj2.

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

When getThis is called as a method of obj1, this inside getThis refers to obj1. Similarly, when called as a method of obj2, this refers to obj2.

This behavior is because when a function is called as a method of an object (such as obj.method()), the object itself becomes the context for this within the function. So, in each invocation, this refers to the object on which the method is called (obj1 or obj2).

As a result, the console output shows that this refers to the respective objects obj1 and obj2 in each invocation.


const obj3 = {
  __proto__: obj1,
  name: "obj3",
};
console.log(obj3.getThis()); // { name: 'obj3' }

The value of this is not the object that has the function as an own property, but the object that is used to call the function. You can prove this by calling a method of an object up in the prototype chain.

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

The value of this always changes based on how a function is called, even when the function was defined on an object at creation.

---------------------

In non-strict mode, a special process called this substitution ensures that the value of this is always an object. This means:
# If a function is called with this set to undefined or null, this gets substituted with globalThis.
# If the function is called with this set to a primitive value, this gets substituted with the primitive value's wrapper object.

function getThis() {
    return this;
}
console.log(getThis()); 
console.log(globalThis);
Both will print the global this 


=========================addEventListener terms=====================

------------------Bubbling and Capturing------------------
When an event occurs on an element in the DOM (Document Object Model), it typically "bubbles" up the DOM tree from the target element to the root of the document. This bubbling behavior is called event bubbling. Additionally, there is another concept called event capturing or "capturing phase," which occurs before the bubbling phase. During the capturing phase, the event descends from the root of the document down to the target element.

When you add an event listener to an element using addEventListener, you can specify whether you want to handle the event during the capturing phase (true) or the bubbling phase (false). By default, addEventListener uses the bubbling phase if the third parameter is not provided or set to false.

------------------------stopPropagation()-----------------------
Now, stopPropagation() is a method that allows you to prevent the event from propagating further up or down the DOM tree, depending on where you call it. If you call stopPropagation() during the bubbling phase, it prevents the event from further bubbling up the DOM tree. If you call it during the capturing phase, it prevents the event from further descending down the DOM tree.
*/

/*
=================Doubts==================
function getThis() {
    return 4;
}

const obj = {}
obj.getThis = getThis

console.log(obj.getThis()); 
console.log(getThis.this); //value of this is undefined so in non-strict mode it should give global object why is it giving undefined
console.log(this) //This should give node global object why is it {} ?
*/
