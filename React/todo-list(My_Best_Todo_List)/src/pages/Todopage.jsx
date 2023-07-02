import React, { useState } from "react";
import Todoinput from "../components/Todoinput";
import TodoList from "../components/TodoList";

import Mousemover from "../components/Mousemover";
import styled from "styled-components";

function Home() {
	const [todos, setTodos] = useState([]);
	return (
		<>
			<MainContainer>
				<Mousemover />
				<Todoinput />
				<TodoList todos={todos} setTodos={setTodos} set={false} />
				<TodoList todos={todos} setTodos={setTodos} set={true} />
			</MainContainer>
		</>
	);
}

export default Home;

// const Container = styled.div`
// 	background-color: rgb(40, 132, 153);
// `;

const MainContainer = styled.main``;
