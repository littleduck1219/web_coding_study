function solution(s) {
	s = s.toLowerCase();
	return s.split("p").length === s.split("y").length;
}

function solution(s) {
	return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
