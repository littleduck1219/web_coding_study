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
        console.log("make in " + this.modelYear)
    }
}

const car1 = new Car("Sorrento", "2023", "e", "5000");
const car2 = new Car("SM5", "2010", "g", "3000");
const car3 = new Car("Palisade", "2019", "g", "6500");
car1.makeNoise();
car1.makeYear();
car2.makeNoise();
car2.makeYear();
car3.makeNoise();
car3.makeYear();
