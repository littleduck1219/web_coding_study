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

	const removeTodos = (id) => {
		const deleteTodos = todos.filter((item) => item.id !== id);
	};

	const settingTodos = (id) => {
		const updateTodos = todos.map((item) => {
			return item.id === id ? { ...item, set: !item.set } : item;
		});
	};

	const filterTodos = set ? completeTodo : inprogressTodo;
	return (
		<section>
			<ContainerTitle>{set ? "Done..." : "Working..."}</ContainerTitle>
			<CardConainer>
				{filterTodos.map((item) => {
					return <Todocard key={item.id} item={item} removeTodos={removeTodos} settingTodos={settingTodos} />;
				})}
			</CardConainer>
		</section>
	);
}

export default Todocontent;

const CardConainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
	margin: 30px;
`;

const ContainerTitle = styled.h1`
	margin: 30px;
	font-size: 30px;
	font-weight: 500;
`;
