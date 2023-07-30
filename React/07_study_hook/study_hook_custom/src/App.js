import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserInput from "./hooks/useInput";

function App() {
	const [name, onChangeHandler] = UserInput();
	const [password, onChangePasswordHandler] = UserInput();

	// const [name, setName] = useState("");
	// const [password, setPassword] = useState("");

	// const onChangeHandler = (e) => {
	// 	setName(e.target.value);
	// };

	// const onChangePasswordHandler = (e) => {
	// 	setPassword(e.target.value);
	// };

	return (
		<div>
			<input type='text' value={name} onChange={onChangeHandler} />
			<input type='password' value={password} onChange={onChangePasswordHandler} />
		</div>
	);
}

export default App;
