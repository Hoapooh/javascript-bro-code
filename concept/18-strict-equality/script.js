//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

//  == comparison operator
// it doesnt't care about data type
if (PI == "3.14") {
	console.log("That is PI");
} else {
	console.log("That is NOT PI");
}

// === strict equality operator
// The data type & values need to be the same
if (PI === "3.14") {
	console.log("That is PI");
} else {
	console.log("That is NOT PI");
}

//  != inequality operator
// it doesnt't care about data type
if (PI != "3.14") {
	console.log("That is NOT PI");
} else {
	console.log("That is PI");
}

// !== strict inequality operator
// The data type & values need to be the same
if (PI !== "3.14") {
	console.log("That is NOT PI");
} else {
	console.log("That is PI");
}
