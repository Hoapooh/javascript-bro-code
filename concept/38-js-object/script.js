"use strict";
// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const firstPerson = {
	firstName: "Spongebob",
	lastName: "Squarepants",
	age: 30,
	isEmployed: true,
	sayHello: () => console.log("Hi! I am Spongebob"),
	eat: function () {
		console.log("I am eating a Krabby Patty");
	},
};

const secondPerson = {
	firstName: "Patrick",
	lastName: "Star",
	age: 42,
	isEmployed: false,
	sayHello: () => console.log("Hey! I am Patrick"),
	eat: function () {
		console.log("I am eating a roast beef, ...");
	},
};

console.log(firstPerson.firstName);
console.log(firstPerson.lastName);
console.log(firstPerson.age);
console.log(firstPerson.isEmployed);
firstPerson.sayHello();
firstPerson.eat();

console.log(secondPerson.firstName);
console.log(secondPerson.lastName);
console.log(secondPerson.age);
console.log(secondPerson.isEmployed);
secondPerson.sayHello();
secondPerson.eat();
