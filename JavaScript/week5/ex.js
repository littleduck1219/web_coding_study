var global = 0;

function func() {
	var global;
	console.log(global);

	var global = 15;

	function func1() {
		var global = 10;

		console.log(global);
	}

	func1();
}

func();

