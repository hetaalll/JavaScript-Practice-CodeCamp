/*
   Reverse the string passed as a parameter
   reverseString("hello") should return "olleh"
*/

//Two ways to solve this problem 

//1. Using a decrementing for loop

function reverseString(str) {
	var ret_str = "";

	for(let i = str.length - 1; i >= 0; i--){
		ret_str += str[i];
	}

	return ret_str;
}

//2. Using in-built methods like .split(), .reverse(), .join()

function reverse_Str(str) {
	var splitStr = str.split("");
	//returns ["h", "e", "l", "l", "o"]

	var reverseArr = splitStr.reverse();
	//returns ["o", "l", "l", "e", "h"]

	var joinStr = reverseArr.join("");
	//returns "olleh"

	return joinStr;
}

/*
   Can chain all three methods together:
   	return str.split("").reverse().join("");
*/
