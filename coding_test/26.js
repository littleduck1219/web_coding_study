function solution(arr) {
	if (arr.length <= 1) {
		return [-1];
	}
	let min = arr.indexOf(Math.min(...arr)); // << 얘가  nan 떠요 테스트 케이스는 통과가 됫는데...
	arr.splice(min, 1);
	console.log(arr);
	return arr;
}
