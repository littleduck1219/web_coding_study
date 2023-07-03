import React from "react";
import styled from "styled-components";
import { SetTodo } from "../redux/modules/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function Todoexpand() {
	const { id } = useParams();
	console.log("id : ", id);
	console.log("useParams : ", useParams());
	const todoLists = useSelector(SetTodo);
	const todo = todoLists.find((todo) => todo.id === id);
	console.log("todo : ", todo);
	return (
		<TodoExpandContainer>
			<TodoExpandHeader>
				<p>id: {todo.id}</p>
				<TodoExpandremovalButton>이전으로</TodoExpandremovalButton>
			</TodoExpandHeader>
			<h1>{todo.title}</h1>
			<p>{todo.content}</p>
		</TodoExpandContainer>
	);
}

export default Todoexpand;

const TodoExpandContainer = styled.div`
	width: 600px;
	height: 800px;
	border: 1px solid black;
	margin-top: 50px;
	margin: auto;
	padding: 30px;
`;

const TodoExpandHeader = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TodoExpandremovalButton = styled.button``;
