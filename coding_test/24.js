function solution(n) {
	let num = n.toString().split("");
	num.sort((a, b) => b - a);
	return parseInt(num.join(""));
}

function solution(n) {
	let nArr = n
		.toString()
		.split("")
		.map((x) => parseInt(x));
	nArr.sort((a, b) => b - a);
	return parseInt(nArr.join(""));
}
