"use strict";
// closure = A function defined inside of another function,
//                  the inner function has access to the variables
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

// ----- EXAMPLE 1 -----
function outer() {
	let message = "Hello";
	function inner() {
		console.log(message);
	}

	inner();
}

outer();

// ----- EXAMPLE 2 -----
function createCounter() {
	let count = 0;
	function increment() {
		count++;
		console.log(`Count increase to ${count}`);
	}

	function getCount() {
		return count;
	}

	return { increment, getCount };
}

const counter = createCounter();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// ----- EXAMPLE 3 -----
function createGame() {
	let score = 0;

	function increaseScore(points) {
		score += points;
		console.log(`+${points}pts`);
	}

	function decreaseScore(points) {
		score -= points;
		console.log(`-${points}pts`);
	}

	function getScore() {
		return score;
	}

	return { increaseScore, decreaseScore, getScore };
}

const scores = createGame();
scores.increaseScore(5);
scores.increaseScore(10);
scores.decreaseScore(3);

console.log(`The final score is ${scores.getScore()}`);
