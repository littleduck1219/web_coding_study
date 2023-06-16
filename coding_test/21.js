function solution(s) {
	let split_words = s.split(" ");
	for (let i = 0; i < split_words.length; i++) {
		let word = split_words[i].split("");
		for (let j = 0; j < word.length; j++) {
			if (j % 2 === 0) {
				word[j] = word[j].toUpperCase();
			} else {
				word[j] = word[j].toLowerCase();
			}
		}
		split_words[i] = word.join("");
	}
	return split_words.join(" ");
}

// console.log(solution("try hello world"));

function solution(s) {
	let words = s.split(" ");
	console.log(words);
	let newS = [];
	for (i = 0; i < words.length; i++) {
		// 0, 1, 2 가 출력된 이유 : for in 문은 배열의 인덱스를 나타냄, for of 문을 사용해야 각 배열의 요소를 나타냄!
		for (j = 0; j < words[i].length; j++) {
			if (j % 2 === 0) {
				newS.push(words[i][j].toUpperCase());
			} else {
				newS.push(words[i][j].toLowerCase());
			}
		}
		newS.push(" ");
	}
	return newS.join("");
}
