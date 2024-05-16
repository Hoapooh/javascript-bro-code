"use strict";
// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

// - THIS can not work with arrow function "() =>"

const person1 = {
	name: "Spongebob",
	favFood: "hamburgers",
	sayhello: function () {
		console.log(`HI! I am ${this.name}`);
	},
	eat: function () {
		console.log(`${this.name} is eating ${this.favFood}`);
	},
};

const person2 = {
	name: "Patrick",
	favFood: "pizza",
	sayhello: function () {
		console.log(`HI! I am ${this.name}`);
	},
	eat: function () {
		console.log(`${this.name} is eating ${this.favFood}`);
	},
};

person1.sayhello();
person1.eat();
person2.eat();
