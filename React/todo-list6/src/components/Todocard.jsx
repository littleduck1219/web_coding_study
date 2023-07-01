import React from "react";
import styled from "styled-components";

function Todocard({ item, removeTodos, settingTodos }) {
	const deleteButtonHandler = (id) => {
		removeTodos(item.id);
	};

	return (
		<TodoCard>
			<CardTitle>{item.title}</CardTitle>
			<CardContent>{item.content}</CardContent>
			<CardButtonContainer>
				<CardButton onClick={() => deleteButtonHandler(item.id)}>삭제하기</CardButton>
				<CardButton onClick={() => deleteButtonHandler(item.id)}>{item.set ? "취소" : "완료"}</CardButton>
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
