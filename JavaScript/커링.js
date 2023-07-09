function add(num1, num2) {
	console.log(num1 + num2);
	return num1 + num2;
}

// add() 함수를 return 하는 또 다른 함수를 return
function addPlus(num1) {
	return function (num2) {
		console.log(add(num1, num2));
	};
}

// 화살표 함수로 표현 (위와 동일)
// addPlus = num1 => num2 => console.log(add(num1, num2));

addPlus(5)(4);
add(4, 5);
