//.checked = property that determines the checked state
// of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
	if (myCheckBox.checked) {
		subResult.textContent = `You are subscribed!`;
	} else {
		subResult.textContent = `You are not subscribed!`;
	}

	if (visaBtn.checked) {
		paymentResult.textContent = `You are paying with Visa`;
	} else if (masterBtn.checked) {
		paymentResult.textContent = `You are paying with Mastercard`;
	} else if (paypalBtn.checked) {
		paymentResult.textContent = `You are paying with Paypal`;
	} else {
		paymentResult.textContent = `You must select a payment type`;
	}
};
