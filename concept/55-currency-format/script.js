"use strict";
// .toLocaleString() = returns a string with a language
//                                  sensitive representation of a number
// .toLocaleString("locale", {options});
// 'locale' = specify the language (undefined default set in browser)
// 'options' object with formatting options

// Intl.NumberFormat() -- This one is an intermediate level Javascript

let number = 123456.789;

// number = number.toLocaleString("en-US");
// number = number.toLocaleString("hi-IN");
// number = number.toLocaleString("de-DE");
// number = number.toLocaleString(undefined);
// number = number.toLocaleString("en-US", { style: "currency", currency: "USD" });
// number = number.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
number = number.toLocaleString("de-DE", { style: "currency", currency: "INR" });

console.log(number);

let date = new Date();

date = date.toString();

console.log(date);
