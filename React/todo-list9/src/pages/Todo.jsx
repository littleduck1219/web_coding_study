import React from "react";
import styled from "styled-components";
import TodoCard from "../components/TodoCard";

function Todo() {
	return (
		<ListContainer>
			<TodoTitle>{"내 할일"}</TodoTitle>
			<CardContainer>
				<TodoCard />
			</CardContainer>
		</ListContainer>
	);
}

export default Todo;

const ListContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	margin-top: 30px;
	padding: 30px;
	gap: 30px;
`;

const TodoTitle = styled.p`
	font-size: 45px;
	font-weight: 500;
`;

const CardContainer = styled.div`
	width: 100%;
`;
