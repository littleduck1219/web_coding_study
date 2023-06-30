function solution(star) {
	let star_load = "*";
	for (let i = 1; i <= star; i++) {
		let space_stone = " ".repeat((star - i));
		console.log(space_stone + star_load);
        star_load = "*".repeat(star_load.length+2);


	}
}
let star = 9;
solution(star);
