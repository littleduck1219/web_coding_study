import React from "react";
import Todocard from "./Todocard";
import styled from "styled-components";
import { SetTodo } from "../redux/modules/todoReducer";
import { useSelector } from "react-redux";

function Todocontent({ set }) {
	const todoList = useSelector(SetTodo);

	const { inprogressTodo, completeTodo } = todoList.reduce(
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
					// console.log("item in Todocontent:", item);
					return <Todocard key={item.id} item={item} />;
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
