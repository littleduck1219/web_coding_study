function solution(n) {
	let num = Math.sqrt(n);
	console.log(num);

	if (Number.isInteger(num)) {
		return parseInt((num + 1) ** 2);
	} else {
		return parseInt(-1); //<=====1.7320508075688772????????  == inInteger(n) false 따봉
	}
}

function solution(n) {
	let nSqrt = Math.sqrt(n);
	if (Number.isInteger(nSqrt)) {
		return (Math.sqrt(n) + 1) ** 2;
	} else return -1;
}
