function solution(arr1) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr1[i].length; j++) {
			let main = arr1[i][j];
			if (i > 0 && main <= arr1[i - 1][j]) continue;
			if (i < arr1.length - 1 && main <= arr1[i + 1][j]) continue;
			if (j > 0 && main <= arr1[i][j - 1]) continue;
			if (j < arr1.length - 1 && main <= arr1[i][j + 1]) continue;
			arr1[i][j] = "*";
		}
	}
	for (let i = 0; i < arr1.length; i++) {
		console.log(arr1[i].join(""));
	}
}


let arr1 = [
	[7, 4, 6, 5, 9],
	[6, 1, 3, 4, 5],
	[4, 8, 5, 6, 9],
	[1, 3, 0, 6, 4],
	[6, 4, 8, 1, 7],
];
solution(arr1);
