"use strict";
// DOM Navigation = The process of navigating through the structure
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------- .firstElementChild --------
/* 
    const element = document.getElementById("fruits");
    const firstChild = element.firstElementChild;
    firstChild.style.background = "yellow";
 */
const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
	const firstChild = ulElement.firstElementChild;
	firstChild.style.background = "yellow";
});

// -------- .lastElementChild --------

// -------- .nextElementSibling --------

// -------- .previousElementSibling --------

// -------- .parentElement --------

// -------- .children --------
