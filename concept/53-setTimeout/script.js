"use strict";
// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)
//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = cancel a timeout before it triggers

/* const timeoutId = setTimeout(() => {
	window.alert("Hello");
}, 3000);

clearTimeout(timeoutId); */

let timeoutId;

function startTimer() {
	timeoutId = setTimeout(() => window.alert("Hello"), 3000);
	console.log("STARTED");
}

function clearTimer() {
	clearTimeout(timeoutId);
	console.log("CLEARED");
}
