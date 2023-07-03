import React from "react";
import Todocard from "./Todocard";
import styled from "styled-components";
import { SetTodo } from "../redux/modules/todoSlice";
import { useSelector } from "react-redux";

function TodoList({ set }) {
	const todoLists = useSelector(SetTodo);
	// const inProgressTodo = todos.filter((todo) => !todo.set);
	// const completeTodo = todos.filter((todo) => todo.set);
	console.log("list render");

	const { inProgressTodo, completeTodo } = todoLists.reduce(
		(acc, item) => {
			if (item.set) {
				acc.completeTodo.push(item);
			} else {
				acc.inProgressTodo.push(item);
			}
			return acc;
		},
		{ inProgressTodo: [], completeTodo: [] }
	);

	const filterTodos = set ? completeTodo : inProgressTodo;
// 데이터 상위단에서 분류?
	return (
		<div className='todo'>
			<TodoContainerTitle>{set ? "Done...🦋" : "working...🐝"}</TodoContainerTitle>
			<TodoCardContainer className='card-container'>
				{filterTodos.map((item) => {
					return <Todocard key={item.id} item={item} />;
				})}
			</TodoCardContainer>
		</div>
	);
}

export default TodoList;

const TodoContainerTitle = styled.h1`
	margin-left: 20px;
`;

const TodoCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1300px;
	height: 500px;
	overflow: auto;
`;
