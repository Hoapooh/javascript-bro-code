"use strict";
// .reduce() = reduce the elements of an array to a single value

// ----- EXAMPLE 1 -----
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

// - Add the toFixed() method to display the floating point
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
	return accumulator + element;
}

// ----- EXAMPLE 2 -----
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumulator, element) {
	return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
	return Math.min(accumulator, element);
}
