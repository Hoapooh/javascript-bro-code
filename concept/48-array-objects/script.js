"use strict";

const fruits = [
	{ name: "apple", color: "red", calories: 95 },
	{ name: "orange", color: "orange", calories: 45 },
	{ name: "banana", color: "yellow", calories: 105 },
	{ name: "coconut", color: "brown", calories: 159 },
	{ name: "pineapple", color: "yellow", calories: 37 },
];

fruits.push({ name: "grapes", color: "purple", calories: 220 });

// ----- SPLICE -----
// - It delete the objects that meet the condition
fruits.splice(1, 2);

// ----- FOR EACH -----
fruits.forEach((fruit) => console.log(fruit.name));

// ----- MAP -----
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ----- FILTER -----

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

console.log(lowCalFruits);

// ----- REDUCE -----

const maxFruits = fruits.reduce((max, fruit) =>
	fruit.calories > max.calories ? fruit : max
);
const minFruits = fruits.reduce((min, fruit) =>
	fruit.calories < min.calories ? fruit : min
);

console.log(minFruits);
