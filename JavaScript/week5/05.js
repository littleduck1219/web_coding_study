class Car {
	constructor(modelName, modelYear, type, price) {
		this._modelName = modelName;
		this._modelYear = modelYear;
		this._type = type;
		this._price = price;
	}

	get modelName() {
		return this._modelName;
	}

	set modelName(value) {
		// 유효성 검사
		if (value.length <= 0) {
			console.log("[오류]모델명이 입력되지 않았습니다.");
			return;
		} else if (typeof value !== "string") {
			console.log("[오류]입력된 모델명이 문자형이 아닙니다!");
			return;
		}
		this._modelName = value;
	}

	get modelYear() {
		return this._modeYear;
	}

	set modelYear(value) {
		// 유효성 검사
		if (value.length <= 4) {
			console.log("[오류]입력된 연식이 4자리가 아닙니다.");
			return;
		} else if (typeof value !== "string") {
			console.log("[오류]입력된 연식이 문자형이 아닙니다!");
			return;
		}

		this._modelYear = value;
	}

	get type() {
		return this._type;
	}

	set type(value) {
		// 유효성 검사
		if (value.length <= 0) {
			console.log("[오류]유형이 입력되지 않았습니다.");
			return;
		} else if (value !== "e" && value !== "g" && value !== "d") {
			console.log("[오류]입력된 타입이 틀립니다!");
			return;
		}

		this._type = value;
	}

	get price() {
		return this._price;
	}

	set price(value) {
		// 유효성 검사
		if (value.length <= 0) {
			console.log("[오류]가격이 입력되지 않았습니다.");
			return;
		} else if (typeof value !== "number") {
			console.log("[오류]입력된 모델명이 숫자형이 아닙니다!");
			return;
		}

		this._price = value;
	}

	makeNoise() {
		console.log(this._modelName + ": 빵!");
	}
	makeYear() {
		console.log("make in " + this._modelYear);
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
