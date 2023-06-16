function solution(s) {
	var answer = "";
	if (s.length % 2 !== 0) {
		answer += s.slice(s.length / 2, s.length / 2 + 1);
	} else {
		answer += s.slice(s.length / 2 - 1, s.length / 2 + 1);
	}
	return answer;
}

function solution(s) {
	if (s.length % 2 === 0) {
		return s[s.length / 2 - 1] + s[s.length / 2];
	} else {
		return s[Math.floor(s.length / 2)];
	}
}
