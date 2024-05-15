// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

function happyBirthday(username, age) {
	console.log("Happy birthday to you!");
	console.log("Happy birthday to you!");
	console.log(`Happy birthday dear ${username}!`);
	console.log("Happy birthday to you!");
	console.log(`You are ${age} years old`);
}

happyBirthday("Hoapooh", 20);

function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}
function isEven(number) {
	return number % 2 === 0 ? true : false;
}
function isOdd(number) {
	return number % 2 === 1 ? true : false;
}
function isValidEmail(email) {
	return email.includes("@") ? true : false;
}

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
console.log(divide(5, 2));
console.log(isEven(10));
console.log(isValidEmail("Hoapooh@gmail.com"));
