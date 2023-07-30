import React, { useState, useMemo } from "react";

function HeavyComponent() {
	const [count, setCount] = useState(0);

	const plusButtonHandler = () => {
		setCount(count + 1);
	};

	const heavyWork = () => {
		for (let i = 0; i < 1000000000; i++) {}
		return 1000;
	};

	// 무거운 동작시에 useMemo에 저장해 두고 변하지 않을때까지 쓰면 된다.

	const value = useMemo(() => heavyWork(), []);
	console.log(`value는 ${value}입니다.`);

	return (
		<>
			<p>나는 엄청 무거운 컴포넌트야</p>
			<button onClick={plusButtonHandler}>누르면 아래 count가 올라가요!</button>
			{count}
			<br />
		</>
	);
}

export default HeavyComponent;
