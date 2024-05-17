"use strict";
// JSON = (JavaScript Object Notation) data-interchange format
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// ---------- JSON.stringgify() ----------
/* 
    const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
    const person = {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true,
        "hobbies": ["Jellyfishing", "Karate", "Cooking"],
    };
    const people = [
        { "name": "Spongebob", "age": 30, "isEmployed": true },
        { "name": "Patrick", "age": 34, "isEmployed": false },
        { "name": "Squidward", "age": 50, "isEmployed": true },
        { "name": "Sandy", "age": 27, "isEmployed": false },
    ];

    const jsonstring = JSON.stringify(people);

    console.log(jsonstring);
    console.log(people);
 */
// ---------- JSON.parse() ----------
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[
{ "name": "Spongebob", "age": 30, "isEmployed": true },
{ "name": "Patrick", "age": 34, "isEmployed": false },
{ "name": "Squidward", "age": 50, "isEmployed": true },
{ "name": "Sandy", "age": 27, "isEmployed": false }
]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);

// ---------- JSON.parse() ----------
fetch("people.json")
	.then((response) => response.json())
	.then((value) => value.forEach((value) => console.log(value)))
	.catch((error) => console.log(error));
