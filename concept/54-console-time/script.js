"use strict";
// console.time() = tool that allows you to measure the time it takes
//                              for a section of code or process to execute
//                              Great for identifying performance "bottlenecks"

// console.time("object");
// console.timeEnd("object");

function loadData() {
	console.time("loadData");

	for (let i = 0; i < 1000000000; i++) {
		// do some code
	}

	console.timeEnd("loadData");
}

function processData() {
	console.time("processData");

	for (let i = 0; i < 1000000; i++) {
		// pretend to process some data
	}

	console.timeEnd("processData");
}

loadData();
processData();
