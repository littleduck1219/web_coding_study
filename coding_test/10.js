function solution(arr1, arr2) {
	var answer = [];
	for (let i = 0; i < arr1.length; i++) {
		let row = [];
		for (let j = 0; j < arr1[0].length; j++) {
			row[i][j] = arr1[i][j] + arr2[i][j];
		}
		answer.push(row);
	}
	return answer;
}

function solution(arr1, arr2) {
	let answer = [];
	for (let i = 0; i < arr1.length; i++) {
		answer[i] = [];
		for (let j = 0; j < arr1[i].length; j++) {
			answer[i][j] = arr1[i][j] + arr2[i][j];
		}
	}
	return answer;
}