import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { __getTodos } from "./redux/modules/todoSlice";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getTodos());
	}, []);

	return <div>Thunk App</div>;
}

export default App;
