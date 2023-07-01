import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import uuid from "react-uuid";

function Todoinput({ todos, setTodos }) {
	const todoId = uuid();

	const [inputs, setInputs] = useState({
		id: todoId,
		title: "",
		content: "",
		set: false,
	});

	const { title, content } = inputs;

	const onSubmit = (event) => {
		const { value, name } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const addTodoButtonHandler = (event) => {
		event.preventDefault();
		setTodos([...todos, inputs]);
		setInputs({ id: todoId, title: "", content: "", set: false });
	};

	return (
		<TodoFromContainer>
			<div>
				제목 : <TodoInput name='title' onChange={onSubmit} value={title} />
				내용 : <TodoInput name='content' onChange={onSubmit} value={content} />
			</div>
			<TodoSubmitButton onClick={addTodoButtonHandler}>추가하기</TodoSubmitButton>
		</TodoFromContainer>
	);
}

export default Todoinput;

const TodoFromContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 15px 30px;
`;

const TodoInput = styled.input`
	margin-right: 20px;
	width: 200px;
	height: 20px;
	border: 1px solid black;
`;

const TodoSubmitButton = styled.button`
	width: 100px;
	height: 40px;
	border: 1px solid black;
	border-radius: 20px;
	background-color: white;
`;
