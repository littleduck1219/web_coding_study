function solution(phone_number) {
	let last_num = phone_number.slice(-4);
	let star = "*".repeat(phone_number.length - 4);
	return `${star}${last_num}`;
}
