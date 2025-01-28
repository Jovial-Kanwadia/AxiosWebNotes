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
    console.log(this);
  }
  const person1 = new Person('Alice');
  const person2 = new Person('Bob');
  console.log(person1.name); // 'Alice'
  console.log(person2.name); // 'Bob'

4) Explicit Binding: You can explicitly specify the value of this using methods like call(), apply(), or bind().

function greet() {
    console.log(`Hello, ${this.name}!`);
    console.log(this);
  }
  const obj1 = { name: 'Alice' };
  const obj2 = { name: 'Bob' };
  / Call the greet function with the obj1 object as the context
  greet.call(obj1); // 'Hello, Alice!'
  / Call the greet function with the obj2 object as the context
  greet.call(obj2); // 'Hello, Bob!'

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
*/

// ================Questions====================
/*
Question 1: What will be the output and why?
const obj1 = {
    value: 10,
    getValue: function () {
        return this.value;
    },
};

const obj2 = { value: 20 };

const getValue = obj1.getValue;
console.log(getValue()); 
console.log(obj2.getValue?.()); 

Question 2: How is output 40 when "this" arrow func do not have a "this" value?
const obj = {
    value: 40,
    getValue: function () {
        const arrowFunc = () => this.value;
        return arrowFunc();
    },
};

console.log(obj.getValue()); // 40

Question 3: Explain the output
class Test {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    static getStaticValue() {
        return this.value;
    }
}

const instance = new Test(50);
console.log(instance.getValue());
console.log(Test.getStaticValue()); 

*/
