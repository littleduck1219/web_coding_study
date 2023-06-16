function solution(num) {
	let result = Math.abs(num % 2);
	if (result == 1) {
		return "Odd";
	} else {
		return "Even";
	}
}
