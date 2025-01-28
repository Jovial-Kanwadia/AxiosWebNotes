
/* ===================Array Properties===================
1) JavaScript arrays are resizable and can contain a mix of  different data types. 

2) JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.


========================Array Methods Properties=======================
Copying methods and mutating methods
=> Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so by first constructing a new array and then populating it with elements. The copy always happens shallowly — the method never copies anything beyond the initially created array.

How these copies are made?
=> Object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.

=> Primitive types such as strings, numbers and booleans (not String, Number, and Boolean objects): their values are copied into the new array.

Mutating method	Non-mutating alternative
copyWithin()	No one-method alternative
fill()	        No one-method alternative
pop()	        slice(0, -1)
push(v1, v2)	concat([v1, v2])
reverse()	    toReversed()
shift()	        slice(1)
sort()	        toSorted()
splice()	    toSpliced()
unshift(v1, v2)	toSpliced(0, 0, v1, v2)

An easy way to change a mutating method into a non-mutating alternative is to use the spread syntax or slice() to create a copy first:
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr

Iterative methods
Generic array methods

=====================Array Methods=====================
1) arr.push(), arr.pop(), arr.unshift(), arr.shift
2) arr.include(), arr.indexOf(), arr.join()

3) arr.length() => length of arr in int
Create empty array of fixed length
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]

Array with non-writable length
"use strict";
const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // TypeError: Cannot assign to read only property 'length' of object '[object Array]'

4) arr.slice(), arr.splice()
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
 fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
 citrus contains ['Orange','Lemon']

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.splice(1, 3);
 fruits contains ['Banana', 'Apple', 'Mango']
 citrus contains ['Orange','Lemon']

Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");
 myFish is ["angel", "clown", "trumpet", "sturgeon"]
 removed is ["drum"]


 5) arr.concat(), arr.flat(), .isArray(), .to(), .from(), .of(), forEach(), map(), filter(), reduce(), for of, for in, 

*/


