import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<TitleSection>
			<TodoTitle>My-todo-list</TodoTitle>
			<TodoTitle>React</TodoTitle>
		</TitleSection>
	);
}

export default Header;

const TitleSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: skyblue;
	border-radius: 20px;
`;

const TodoTitle = styled.p`
	font-weight: 500;
	color: white;
	margin: 10px 30px 10px 30px;
`;
