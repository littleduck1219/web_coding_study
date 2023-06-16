function solution(absolutes, signs) {
	var answer = 123456789;
	for (let i = 0; i < absolutes.length; i++) {
		if (signs[i] === "false") {
			absolutes[i] = absolutes * -1;
		}

		return answer;
	}
}

function solution(absolutes, signs) {
	var answer = 0;
	for (i = 0; i < absolutes.length; i++) {
		if (signs[i]) {
			answer += absolutes[i];
		} else {
			answer -= absolutes[i];
		}
	}

	return answer;
}
