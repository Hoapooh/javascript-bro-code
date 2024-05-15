// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// Add new element at the beginning/end of array
fruits.unshift("Coconut");
fruits.push("mango");

// Remove the first/last element
fruits.shift(); // remove 'Coconut'
fruits.pop(); // remove 'mango'

console.log(fruits);

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana");

console.log(numOfFruits);
console.log(index);

// ----- INCREMENT -----
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// ----- DECREMENT -----
for (let i = fruits.length - 1; i >= 0; i--) {
	console.log(fruits[i]);
}

// ----- ENHACED STYLE -----
for (let fruit of fruits) {
	console.log(fruit);
}

// sort array in ascending/descending order
fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);
