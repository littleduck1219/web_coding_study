function solution(n) {
	let result = "";
	let sum = 0;
	let str = String(n);
	for (let i = str.length - 1; i >= 0; i--) {
		sum += parseInt(str[i])
		result += str[i];
		if (i >= 1) {
			result += "+";
		}
	}
	return `${result}=${sum}`;
}
console.log(solution(718253));
console.log(solution(12345))
console.log(solution(1532576))