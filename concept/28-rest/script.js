// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// ----- Example 1 -----
function openFridge(...foods) {
	console.log(foods);
}
function getFood(...foods) {
	return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// ----- Example 2 -----
function sum(...numbers) {
	let result = 0;

	for (let number of numbers) {
		result += number;
	}
	return result;
}

function getAverage(...numbers) {
	let result = 0;

	for (let number of numbers) {
		result += number;
	}
	return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);

console.log(total);

// ----- Example 3 -----
function combineString(...strings) {
	return strings.join(" ");
}

const fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullname);
