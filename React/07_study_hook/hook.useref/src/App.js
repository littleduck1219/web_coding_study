import React, { useEffect, useRef, useState } from "react";

const style = { border: "1px solid black", margin: "10px", padding: "10px" };

function App() {
	// (1)
	// ref의 값이 바뀌더라도 렌더링이 되지 않는다 -> 내부 변수가 초기화 되는것을 막는다.
	// const ref = useRef("초기값");
	// console.log("ref", ref);

	// ref.current = useRef("변경값");
	// console.log("ref2", ref);

	// (2)
	// const [count, setCount] = useState(0);
	// const countRef = useRef(0);

	// const countAddButonHandler = () => {
	// 	return setCount(count + 1);
	// };

	// const refAddButonHandler = () => {
	// 	countRef.current++;
	// 	console.log("ref", countRef.current);
	// };

	const idRef = useRef("");
	const pwRef = useRef("");

	// useEffect(() => {
	// 	idRef.current.focus();
	// }, []);

	// useEffect(() => {
	// 	pwRef.current.focus();
	// });

	const [id, setId] = useState("");

	const trackingInputValue = (event) => {
		setId(event.target.value);
	};

	useEffect(() => {
		if (id.length > 10) {
			pwRef.current.focus();
		}
	}, [id]);
	return (
		// <>
		// (2)
		// 	<div style={style}>
		// 		state영역 입니다.{count} <br />
		// 		<button onClick={countAddButonHandler}>state 증가</button>
		// 	</div>
		// 	<div style={style}>
		// 		ref 영역입니다. {countRef.current} <br />
		// 		<button onClick={refAddButonHandler}>ref 증가</button>
		// 	</div>
		// </>

		<>
			<div>
				아이디 : <input type='text' onChange={trackingInputValue} value={id} ref={idRef} />
			</div>
			<div>
				패스워드 : <input type='password' ref={pwRef} />
			</div>
		</>
	);
}

export default App;
