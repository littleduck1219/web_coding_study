import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
	const navigate = useNavigate();

	return (
		<HeaderContainer>
			<AiTwotoneHome
				onClick={() => {
					navigate("/");
				}}
				size='30'
			/>
			<HeaderTitle>{"모두의 투두리스트"}</HeaderTitle>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;
	border-bottom: 1px solid lightgray;
	height: 50px;
`;

const HeaderTitle = styled.p`
	font-size: 30px;
`;
