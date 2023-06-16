function solution(x) {
	let num = x.toString();
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += parseInt(num[i]);
	}
	return x % sum == 0 ? true : false;
}

function solution(x) {
	const add = (Arr) => Arr.reduce((a, b) => a + b, 0);
	let Arr = x
		.toString()
		.split("")
		.map((n) => parseInt(n));
	let Sum = add(Arr);
	return x % Sum ? false : true;
}return x % Sum == 0 ?;
// } ?고장난코드 zzzzzzz
// 일단 저거 되긴 되네요
// 조건문은 이미 true/false로 나와서 ? true:false는 크게 없어도 될 것같아요!

