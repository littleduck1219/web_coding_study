import React from "react";
import styled from "styled-components";

function Todocard({ item, todos, setTodos }) {
	console.log("card render");

	const removeButtonHandler = (id) => {
		const deleteTodo = todos.filter((todo) => todo.id !== id);
		setTodos(deleteTodo);
	};

	const toggleButtonHandler = (id) => {
		const toggleTodo = todos.map((item) => {
			return item.id === id ? { ...item, set: !item.set } : item;
		});
		setTodos(toggleTodo);
	};

	const type = item.set ? "취소" : "완료";
	return (
		<TodoCard key={item.id} className='card'>
			<h3>{item.title}</h3>
			<p>{item.content}</p>
			<ButtonDiv>
				<Button onClick={() => removeButtonHandler(item.id)}>삭제</Button>
				<Button onClick={() => toggleButtonHandler(item.id)}>{type}</Button>
			</ButtonDiv>
		</TodoCard>
	);
}

export default Todocard;

const TodoCard = styled.div`
	border: 2px solid #7448a8;
	border-radius: 10px;
	width: 236px;
	height: 160px;
	padding: 20px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
`;

const Button = styled.button`
	margin: auto;
	width: 100px;
	height: 35px;
	border: 2px solid #7448a8;
	border-radius: 10px;
	background-color: white;
`;
