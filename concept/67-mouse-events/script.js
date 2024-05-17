"use strict";
// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (event) => {
	myBox.style.background = "tomato";
	myBox.textContent = "WOW! 😲";
});

myBtn.addEventListener("mouseover", (event) => {
	myBox.style.background = "lightcoral";
	myBox.textContent = "Hello!!! 🤣";
});

myBtn.addEventListener("mouseout", (event) => {
	myBox.style.background = "lightgreen";
	myBox.textContent = "Click Me 😊";
});
