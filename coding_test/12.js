function solution(price, money, count) {
	let answer = 0;
	for (i = 1; i < count + 1; i++) {
		let priceInc = price * i;
		answer += priceInc;
	}
	return money - answer < 0 ? Math.abs(money - answer) : 0;
}
