/*
   Return the length of the longest word in the provided sentence.
   findLongestWordLength("Google do a barrel roll") should return 6 (Google/barrel)
*/

//Three ways to solve this problem

//1. Using .split() and for loop

function findLongestWordLength(str){
	var arr = str.split(' ');
	//returns ["Google", "do", "a", "barrel", "roll"]

	var len = 0;

	for(let i = 0; i < arr.length; i++0) {
		if(arr[i].length > len) {
			len = arr[i].length;
		}
	}

	return len;
}

//2. Using sort()

function findLongestWordLen(str){
	var arr = str.split(' ');

	//sort the elements in the array in descending order of lengths
	var wordArr = arr.sort(function(a,b){
		return b.length - a.length;
	});

	//return the length of the first element of the arrat
	return wordArr[0].length;
}

//3. Using reduce()

function findLongestLen(str){
	var arr = str.split(' ');

	var word = arr.reduce(function(longest, current){
		if(longest.length > current.length)
			return longest;
		else
			return current
	}, "");

	return word.length;
}
