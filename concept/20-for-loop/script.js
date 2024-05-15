// for loop = repeat some code a LIMITED amount of times

// ---- INCREMENT -----
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// ---- DECREMENT -----
for (let i = 10; i > 0; i--) {
	console.log(i);
}

// ---- CONTINUE -----
// - skip the loop that meet the condition
for (let i = 1; i <= 20; i++) {
	if (i == 13) {
		continue;
	} else {
		console.log(i);
	}
}

// ---- BREAK -----
// - break out of the whole loop entirely
for (let i = 1; i <= 20; i++) {
	if (i == 13) {
		break;
	} else {
		console.log(i);
	}
}
