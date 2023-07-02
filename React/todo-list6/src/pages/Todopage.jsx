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
			<Todoinput todos={todos} setTodos={setTodos} />
			<Todocontent todos={todos} setTodos={setTodos} set={false} />
			<Todocontent todos={todos} setTodos={setTodos} set={true} />
		</div>
	);
}

export default Todopage;
