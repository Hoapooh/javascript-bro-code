const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max + 1));

// console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
	guess = window.prompt(`Guess a number between ${min} - ${max}`);
	guess = Number(guess);

	if (isNaN(guess)) {
		window.alert("Please enter a valid number");
	} else if (guess < min || guess > max) {
		window.alert("Please enter a valid number");
	} else {
		attempts++;
		if (guess < answer) {
			console.log("TOO LOW! TRY AGAIN");
		} else if (guess > answer) {
			console.log("TOO High! TRY AGAIN");
		} else {
			console.log(
				`CORRECT! THE ANSWER WAS ${answer}. It took you ${attempts} attempts`
			);
			running = false;
		}
	}
}
