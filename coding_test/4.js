function solution(a, b) {
	result = 0;
	if (a < b) {
		for (i = a; i <= b; i++) {
			result += i;
		}
	} else {
		for (i = b; i <= a; i++) {
			result += i;
		}
	}

	return result;
}
