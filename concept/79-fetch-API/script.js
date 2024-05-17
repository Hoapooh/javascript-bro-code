"use strict";
// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options}) -- options: method(GET, POST, PUT, DELETE, ...)

// --------------- FETCH ORIGINAL ---------------

fetch("https://pokeapi.co/api/v2/pokemon/rayquaza")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}
		return response.json();
	})
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

// --------------- ASYNC/AWAIT ---------------
async function fetchData() {
	try {
		const pokeName = document.getElementById("pokemonName").value.toLowerCase();
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokeName}`
		);

		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}
		const data = await response.json();
		const pokeSprite = data.sprites.front_default;
		const imgElement = document.getElementById("pokemonSprite");
		imgElement.src = pokeSprite;
		imgElement.style.display = "block";
	} catch (error) {
		console.error(error);
	}
}
