// String methods = allow you to manipulate and work with text (strings)

let username = "Hoapooh";

console.log(username.charAt(0));

console.log(username.indexOf("a"));
console.log(username.lastIndexOf("o"));

console.log(username.length);

console.log(username.trim());

console.log(username.toUpperCase());
console.log(username.toLowerCase());

console.log(username.repeat(3));

// This is a boolean value
console.log(username.startsWith(" "));
console.log(username.endsWith("h"));
console.log(username.includes(" "));

let phoneNumber = "123-456-789";

console.log(phoneNumber.replaceAll("-", " "));

// padStart & padEnd
// - the first argument is to set the String to have the expected number of letter
// - the second argument is something that will be added to the start/end of String
console.log(phoneNumber.padStart(13, "0"));
console.log(phoneNumber.padEnd(13, "0"));
