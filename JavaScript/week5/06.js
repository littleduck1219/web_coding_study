class Car {
	constructor(modelName, modelYear, type, price) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.type = type;
		this.price = price;
	}

	makeNoise() {
		console.log(this.modelName + ": 빵!");
	}
	makeYear() {
		console.log("make in " + this.modelYear);
	}
}

class ElectronicCar extends Car {
	constructor(modelName, modelYear, price, chargeTime) {
		super(modelName, modelYear, "e", price);
		this._chargeTime = chargeTime;
	}

	set chargeTime(value) {
		this._chargeTime = value;
	}

	get chargeTime() {
		return this._chargeTime;
	}
}

const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.makeYear();
console.log(eleCar1._chargeTime)

const car1 = new Car("Sorrento", "2023", "e", "5000");
const car2 = new Car("SM5", "2010", "g", "3000");
const car3 = new Car("Palisade", "2019", "g", "6500");
car1.makeNoise();
car1.makeYear();
car2.makeNoise();
car2.makeYear();
car3.makeNoise();
car3.makeYear();
