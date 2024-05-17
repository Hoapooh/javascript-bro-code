"use strict";
// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// - Date(year, month, day, hour, minute, second, ms)
// - input 0 can show you the day your computer began
// - The getMonth() method starts with 0

const date = new Date();

// ----- GET DATA -----
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
const datOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(datOfWeek);

// ----- SET DATA-----
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(3);
date.setMinutes(26);
date.setSeconds(5);

console.log(date);

// ----- SYNTAX-----
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
	console.log("Happy New Year!");
}
