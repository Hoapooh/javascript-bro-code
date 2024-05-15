// logical operators = used to combine or manipulate boolean values (true or false)

// AND = &&
// OR = ||
// NOT = !

const temp = 20;

// AND = &&
if (temp > 0 && temp <= 30) {
	console.log("The weather is GOOD");
} else {
	console.log("The weather is BAD");
}

// OR = ||
if (temp <= 0 || temp > 30) {
	console.log("The weather is BAD");
} else {
	console.log("The weather is GOOD");
}

// NOT = !
const isSunny = false;

if (!isSunny) {
	console.log("It is CLOUDY");
} else {
	console.log("It is SUNNY");
}
