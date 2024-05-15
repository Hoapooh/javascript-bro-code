// spread operator =  ...
// - allows an iterable such as an array or string to be expanded
// - into separate elements (unpacks the elements)

// ----- EXAMPLE 1 -----
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);

let username = "Hoa Pooh";
// - we can use "join" here to make an array become an string
let letters = [...username].join("");

console.log(letters);
// ----- EXAMPLE 2 -----
let fruits = ["apple", "orange", "banana"];
let newFruit = [...fruits, "mango"];

console.log(newFruit);
