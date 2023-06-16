function solution(x, n) {
	let answer = [];
	for (i = 1; i < n + 1; i++) {
		answer.push(x * i);
	}
	return answer;
}
