import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import { useCallback } from "react";

function App() {
	const boxesStyle = {
		display: "flex",
		marginTop: "10px",
	};

	const [count, setCount] = useState(0);

	const onPlusButtonClickHandler = () => {
		setCount(count + 1);
	};

	const onMinusButtonClickHandler = () => {
		setCount(count - 1);
	};

	const initCount = useCallback(() => {
		// 0이 출력된다. useCallback()이 저장되었을 시기는 처음 호출됬을때 였기 때문
		console.log(`${count}에서 0으로 변경되었습니다.`);
		setCount(0);
	}, [count]); // <- 디펜던시에 값을 지정해서 막아준다.

	console.log("App");

	return (
		<div>
			<h3>카운트 예제입니다</h3>
			<p>현재 카운트 : {count}</p>
			<button onClick={onPlusButtonClickHandler}>+</button>
			<button onClick={onMinusButtonClickHandler}>-</button>
			<div style={boxesStyle}>
				<Box1 initCount={initCount} />
				<Box2 />
				<Box3 />
			</div>
		</div>
	);
}

export default App;
