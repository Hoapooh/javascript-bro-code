"use strict";
// synchronous  = Executes line by line consecutively in a sequential manner
//                             Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                              Doesn't block the execution flow and allows the program to continue
//                             (I/O operations, network requests, fetching data)
//                             Handled with: Callbacks, Promises, Async/Await

// setTimeout(() => console.log("task 1"), 3000);

// console.log("task 2");
// console.log("task 3");

function wait() {
	console.log("task 2");
}

function hello(callback) {
	setTimeout(() => {
		console.log("task 1");
		callback();
	}, 3000);
}
hello(wait);
