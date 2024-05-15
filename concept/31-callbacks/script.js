// Callback = a function that is passed as an argument to another function.
// - Callback is used to make sure the function passed in will execute next

// - It is used to handle asynchronous operations:
//      1. Reading a file
//      2. Network requests
//      3. Interacting with databases

//             "Hey, when you are done, call this next"

// - There is no parentheses after the function that defined as an arguments
// ----- EXAMPLE 1 -----
hello(wait);

function hello(Callback) {
	console.log("Hello!");
	Callback();
}

function wait() {
	console.log("Wait!");
}

function leave() {
	console.log("Leave!");
}

function goodbye() {
	console.log("Goodbye!");
}

// ----- EXAMPLE 2 -----
function sum(Callback, x, y) {
	let result = x + y;
	Callback(result);
}

function displayConsole(result) {
	console.log(result);
}

sum(displayPage, 1, 2);

function displayPage(result) {
	document.getElementById("myH1").textContent = result;
}
