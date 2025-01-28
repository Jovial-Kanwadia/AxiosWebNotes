/* 
setTimeout
setInterval
clearInterval
clearTimeout

Promises in js
fetch in js
*/

/* 
=======================setTimeout==========================
The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

Syntax-
setTimeout(functionRef, delay, param1, param2, …,paramN)

functionRef - A function to be executed after the timer expires.
delay - The time, in milliseconds that the timer should wait before the specified function or code is executed
param1, …, paramN - Additional arguments which are passed through to the function specified by functionRef.

Return value
The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

setTimeout((x) => {
    console.log(`Delayed for 5 second. ${x}`);
}, 5000, 5);

setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.
To create a progression in which one function only fires after the completion of another function use promises

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

 Output:
this is the third message
this is the second message
this is the first message

==========================setInterval()=======================
The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

Syntax - 
setInterval(func, delay, arg1, arg2, …, argN)

Return value
The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  console.log(a);
  console.log(b);
}

=====================clearTimeout()===============
The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

Syntax -
clearTimeout(timeoutID)

=====================clearInterval()===============
The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.

Syntax -
clearInterval(intervalID)

====================Promises=====================
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A Promise is in one of these states:
  pending: initial state, neither fulfilled nor rejected.
  fulfilled: meaning that the operation was completed successfully.
  rejected: meaning that the operation failed.

-----------Creating Promises and consuming them-------------
const promiseOne = new Promise(function(resolve, reject){
    /Do an async task
    /DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))








------Chaining-------
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. In the old days, doing several asynchronous operations in a row would lead to the classic callback hell:

doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

With promises, we accomplish this by creating a promise chain.Callbacks are attached to the returned promise object, instead of being passed into a function.

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
This second promise (promise2) represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in — which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.


doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

doSomethingElse and doThirdThing can return any value — if they return promises, that promise is first waited until it settles, and the next callback receives the fulfillment value, not the promise itself. It is important to always return promises from then callbacks, even if the promise always resolves to undefined. If the previous handler started a promise but did not return it, there's no way to track its settlement anymore, and the promise is said to be "floating".

doSomething()
  .then((url) => {
    /Missing `return` keyword in front of fetch(url).
    fetch(url);
  })
  .then((result) => {
    / result is undefined, because nothing is returned from the previous
    / handler. There's no way to know the return value of the fetch()
    / call anymore, or whether it succeeded at all.
  });

Using async/await can help you write code that's more intuitive and resembles synchronous code. Below is the same example using async/await:

async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}

-----------Error handling-----------
You might recall seeing failureCallback three times in the pyramid of doom earlier, compared to only once at the end of the promise chain:
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);

This symmetry with asynchronous code culminates in the async/await syntax:
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}

----------Nesting-----------
Nesting is a control structure to limit the scope of catch statements. Specifically, a nested catch only catches failures in its scope and below, not errors higher up in the chain outside the nested scope. When used correctly, this gives greater precision in error recovery:

doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));

In async/await, this code looks like:

async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
        
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}

------------Promise rejection events------------
 When a promise is rejected but no rejection handler is available to catch the rejection, the rejection event bubbles up to the global scope, which is usually the window object in a web browser environment or the self object in a web worker environment. When this happens, the JavaScript runtime emits an event to notify that a promise rejection has occurred. There are two main events related to unhandled promise rejections:

1) unhandledrejection Event:
This event is sent when a promise is rejected, but there is no rejection handler available to handle the rejection.

It is dispatched to the global scope (e.g., window or self) when the promise rejection bubbles up to the top of the call stack without being caught by a catch block or a .catch() method.

The event object (of type PromiseRejectionEvent) contains two properties:
  promise: The promise that was rejected.
  reason: The reason provided for the promise rejection (typically an error or an error message).

2) rejectionhandled Event:
This event is sent when a rejection handler is attached to a previously rejected promise, and as a result, the promise rejection no longer remains unhandled.

It is dispatched to the global scope after a rejection handler is added to a previously rejected promise, thereby resolving the unhandled rejection.

Like the unhandledrejection event, the rejectionhandled event also contains a PromiseRejectionEvent object with promise and reason properties.


*/

  