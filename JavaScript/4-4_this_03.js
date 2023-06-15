let ladder = {
	step: 0,
	up() {
		this.step++;
	},
	down() {
		this.step--;
	},
	showStep: function () {
		console.log(this.step);
	},
};

ladder.up();
ladder.down();
ladder.down();
ladder.showStep();
