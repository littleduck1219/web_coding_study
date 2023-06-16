function solution(s) {
	const length = s.length;
	const regex = /^\d+$/;
	if (length === 4 || length === 6) {
		return regex.test(s);
	}
	return false;
}

//^는 문자열의 시작, $는 문자열의 끝을 나타내며,
// \d+는 하나 이상의 숫자를 나타냅니다.
//따라서 이 정규 표현식은 전체 문자열이 숫자로만 이루어져 있는지 검사합니다.

function solution(s) {
	if ((s.length == 4 || s.length == 6) && parseInt(s) == s) {
		return true;
	}
	return false;
}
