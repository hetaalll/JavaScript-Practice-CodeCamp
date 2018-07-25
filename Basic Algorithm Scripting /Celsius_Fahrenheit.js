// Convert Celsius to Fahrenheit

function convertToF (celsius) {
	let fahrenheit = (celsius * (9/5)) + 32;
	return fahrenheit;
}

//convertToF(30);

//Convert Fahrenheit to Celsius

function convertToC (fahrenheit) {
	let celsius = (fahrenheit - 32) * (5/9);
	return celsius;
}

//convertToC(145);
