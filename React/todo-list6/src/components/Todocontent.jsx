import React from "react";
import Todocard from "./Todocard";
import styled from "styled-components";

function Todocontent({ todos, setTodos, set }) {
	const { inprogressTodo, completeTodo } = todos.reduce(
		(acc, item) => {
			if (item.set) {
				acc.completeTodo.push(item);
			} else {
				acc.inprogressTodo.push(item);
			}
			return acc;
		},
		{ inprogressTodo: [], completeTodo: [] }
	);

	const filterTodos = set ? completeTodo : inprogressTodo;

	// console.log("todos in Todocontent:", todos);
	// console.log("setTodos in Todocontent:", setTodos);

	return (
		<section>
			<ContainerTitle>{set ? "Done..." : "Working..."}</ContainerTitle>
			<CardConainer>
				{filterTodos.map((item) => {
					console.log("item in Todocontent:", item);
					return <Todocard key={item.id} item={item} todos={todos} setTodos={setTodos} />;
				})}
			</CardConainer>
		</section>
	);
}

export default Todocontent;

const CardConainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1300px;
	height: 500px;
	overflow: auto;
`;

const ContainerTitle = styled.h1`
	margin: 30px;
	font-size: 30px;
	font-weight: 500;
`;
