Promises are objects in JavaScript that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a more structured and standardized way to handle asynchronous code compared to callbacks.

Promises have three states:

Pending: The initial state when a promise is created, and the asynchronous operation is still in progress.
Fulfilled: The state when the asynchronous operation is successfully completed, and the promise is resolved with a value.
Rejected: The state when the asynchronous operation encounters an error or fails, and the promise is rejected with a reason or an error object.
Promises have several methods to handle the outcome of the asynchronous operation. 

Here are three commonly used methods:

then(): The then() method is used to handle the fulfillment or success of a promise. It takes two optional callback functions as arguments: onFulfilled for handling the fulfillment case and onRejected for handling the rejection case.

catch(): The catch() method is used to handle promise rejections or errors. It is equivalent to specifying the onRejected callback function in the then() method specifically for handling rejections.

finally(): The finally() method is used to specify a callback function that will be executed regardless of whether the promise is fulfilled or rejected. It allows you to perform cleanup or additional actions that need to be done after the completion of the promise.