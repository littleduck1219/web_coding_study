import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { SelectCounter, plusOne, minusOne, inputCount } from "./redux/modules/count.jsx";
import { Counter, addNumber, minusNumber } from "./redux/modules/countSlice";
import { __addNumber, __minusNumber } from "./redux/modules/countSlice";

function App() {
	const [count, setCount] = useState(1);
	// const counter = useSelector(SelectCounter);
	// const counter = useSelector(SetTodoSlice);
	const counter = useSelector(Counter);
	console.log("🚀 ~ file: App.js:9 ~ App ~ counter:", counter);
	const dispatch = useDispatch();

	const clickPlusCountHandler = () => {
		dispatch(__addNumber(count));
	};

	const clickMinusCounterHandler = () => {
		dispatch(__minusNumber(count));
	};

	const inputCounterHandler = (event) => {
		setCount(Number(event.target.value));
	};

	return (
		<div>
			<h1>{counter.number}</h1>
			<input type='number' value={count} onChange={inputCounterHandler} />
			<button onClick={clickPlusCountHandler}>+</button>
			<button onClick={clickMinusCounterHandler}>-</button>
		</div>
	);
}

export default App;
