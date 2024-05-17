"use strict";
// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// ----- EXAMPLE 1 -----
let numbers = [1, 9, 5, 7, 10, 2, 8, 4, 6, 3];

numbers.sort((a, b) => b - a);

console.log(numbers);

// ----- EXAMPLE 2 -----
// - the "localeCompare" is used scpecially for String compare
// - to make sure it follows lexicographic
const people = [
	{ name: "Spongebob", age: 30, gpa: 3.0 },
	{ name: "Patrick", age: 34, gpa: 1.5 },
	{ name: "Squidward", age: 51, gpa: 2.5 },
	{ name: "Sandy", age: 27, gpa: 4.0 },
];

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);
