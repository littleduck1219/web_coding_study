class Rectangle {
	constructor(height, width) {
		this._height = height;
		this._width = width;
	}

	// width를 위한 getter
	get width() {
		return this._width;
	}

	// width를 위한 setter
	set width(value) {
		// 검증 1) value 가 음수이면 오류
		if (value <= 0) {
			console.log("[오류]가로 길이는 0보다 커야합니다.");
			return;
		} else if (typeof value !== "number") {
			console.log("[오류]가로길이로 입력될 값은 숫자 타입입니다.");
			return;
		}

		// this.width = value; 무한루프
        this._width = value; // 무한루프
	}

	// height를 위한 getter
	get height() {
		return this._height;
	}

	// height를 위한 Setter
	set height(value) {
		// 검증 1) value 가 음수이면 오류
		if (value <= 0) {
			console.log("[오류]가로 길이는 0보다 커야합니다.");
			return;
		} else if (typeof value !== "number") {
			console.log("[오류]가로길이로 입력될 값은 숫자 타입입니다.");
			return;
		}
		this._height = value; // 무한루프
	}

    // getArea : 가로 * 세로 => 넓이
    getArea () {
        const space = this._width * this._height;
        console.log(`넓이는 => ${space}`)
    }
}

const rect1 = new Rectangle(10, 20);
rect1.getArea()