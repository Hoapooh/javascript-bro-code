"use strict";
// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// ----- EXAMPLE 1 -----
// - SWAP VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ----- EXAMPLE 2 -----
//  - SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ----- EXAMPLE 3 -----
// - ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, ...othersColor] = colors;

console.log(firstColor, secondColor, othersColor);

// ----- EXAMPLE 4 -----
// - EXTRACT VALUES FROM OBJECTS

const person1 = {
	firstName: "Spongebob",
	lastName: "SquarePants",
	age: 30,
	job: "Fry Cook",
};

const person2 = {
	firstName: "Patrick",
	lastName: "Star",
	age: 34,
};

// - THERE IS A DEFAULT VALUE ASSIGN TO PARTICULAR ELEMENT IF IT IS UNDEFINED

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ----- EXAMPLE 5 -----
// - DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
	console.log(`name: ${firstName} ${lastName}`);
	console.log(`age: ${age}`);
	console.log(`job: ${job}`);
}

displayPerson(person2);
