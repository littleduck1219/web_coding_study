import React from "react";
import styled from "styled-components";

function Todocard({ item, todos, setTodos }) {
	const removeTodos = (id) => {
		const deleteTodos = todos.filter((item) => item.id !== id);
		setTodos(deleteTodos);
	};

	const settingTodos = (id) => {
		console.log("todos in settingTodos:", todos);
		console.log("setTodos in settingTodos:", setTodos);
		console.log("item in Todocard:", item);
		const updateTodos = todos.map((item) => {
			return item.id === id ? { ...item, set: !item.set } : item;
		});
		setTodos(updateTodos);
	};

	return (
		<TodoCard>
			<CardTitle>{item.title}</CardTitle>
			<CardContent>{item.content}</CardContent>
			<CardButtonContainer>
				<CardButton onClick={() => removeTodos(item.id)}>삭제하기</CardButton>
				<CardButton onClick={() => settingTodos(item.id)}>{item.set ? "취소" : "완료"}</CardButton>
			</CardButtonContainer>
		</TodoCard>
	);
}

export default Todocard;

const TodoCard = styled.div`
	width: 300px;
	height: 200px;
	border: 1px solid skyblue;
	border-radius: 20px;
	padding: 20px;
	margin: 20px;
`;

const CardTitle = styled.h2`
	font-size: 40px;
`;

const CardContent = styled.p`
	font-size: 15px;
`;

const CardButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
`;

const CardButton = styled.button`
	margin: auto;
	width: 120px;
	height: 40px;
	border: none;
	border-radius: 20px;
	background-color: lightblue;
`;
