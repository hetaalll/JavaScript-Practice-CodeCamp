/*
   Returns the factorial of the provided integer
   factorialize(5) should return 120 (1*2*3*4*5)
*/

//Two ways to solve it

//1. Using a for loop

function factorialize(num) {
	if(num == 0 || num ==1) {
		return 1;
	}

	for(let i = num - 1; i >= 1; i--) {
		num *= i;
	}

	return num;
}

//2. Using recursion

function factorial(n) {
	if(n == 0) {  //base case
		return 1;
	}

	if(n == 1) {  //base case
		return 1;
	}

	else {
		return (n * factorial(n - 1));
	}
}
