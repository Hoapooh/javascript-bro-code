// MATH OBJECT
// - built-in object  that provides a collection of properties and methods

let x = -90;
let y = 2;
let z;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);

// - remove fractional unit | 3.21 --> 3 (remove .21)
z = Math.trunc(x);

z = Math.pow(x, y);
z = Math.sqrt(x);
z = Math.log(x);

z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);

z = Math.abs(x);

z = Math.sign(x);

let max = Math.max(x, y);
let min = Math.min(x, y);

console.log(max);
