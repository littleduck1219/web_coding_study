import { useDispatch, useSelector } from "react-redux";
import { MINUS_ONE, PLUS_ONE, PLUS_N, plusN } from "./redux/modules/counter";
import "./App.css";
import { plusOne, minusOne } from "./redux/modules/counter";
import { useState, useEffect } from "react";

function App() {
	const [number, setNumber] = useState(0);
	// store에 접근하여 counter의 값을 읽어오고 싶다.
	// useSelector
	const data = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		console.log("number: " + number);
	}, [number]);

	const counter = useSelector((state) => {
		return state.counter;
	});

	const users = useSelector((state) => {
		return state.users;
	});

	// dispatch를 가져오는 방법
	const dispatch = useDispatch();

	console.log("data", data);
	console.log("counter", counter.number);
	console.log("users", users.number);

	return (
		<div>
			<div>현제 카운트 : {counter.number}</div>
			<div>
				<input type='number' value={number} onClick={(event) => setNumber(event.target.value)} />
			</div>
			<button
				onClick={() => {
					// dispatch({
					// 	type: PLUS_ONE,
					// });
					dispatch(plusN(number));
				}}>
				+
			</button>
			<button
				onClick={() => {
					dispatch(minusOne());
				}}>
				-
			</button>
		</div>
	);
}

export default App;
