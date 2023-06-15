function Calculator() {
	this.read = function () {
		this.a = 4;
		this.b = 2;
	};
	this.sum = function () {
		return this.a + this.b;
	};
	this.mul = function () {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
