import React from "react";
import Todoinput from "../components/Todoinput";
import Todocontent from "../components/Todocontent";
import { useState } from "react";
import Mousemover from "../components/Mousemover";

function Todopage() {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<Mousemover />
			<Todoinput todos={todos} setTodos={setTodos} set={todos.set} />
			<Todocontent todos={todos} setTodos={setTodos} set={todos.set} />
		</div>
	);
}

export default Todopage;
