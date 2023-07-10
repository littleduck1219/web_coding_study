import React, { useState } from "react";
import styled from "styled-components";
import { AiFillRightCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function MainForm() {
	const navigate = useNavigate();

	return (
		<FormContainer>
			<MainTitle>{"무엇을 할까요?"}</MainTitle>
			<MainFormButton
				onClick={() => {
					navigate("todo/add");
				}}>
				<ButtonTitle>{"할일 기록하기"}</ButtonTitle>
				<AiFillRightCircle size={30} color='red' />
			</MainFormButton>
			<MainFormButton
				onClick={() => {
					navigate("todo");
				}}>
				<ButtonTitle>TODO LIST</ButtonTitle>
				<AiFillRightCircle size={30} color='red' />
			</MainFormButton>
		</FormContainer>
	);
}

export default MainForm;

const FormContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	margin-top: 30px;
	padding: 30px;
	box-sizing: border-box;
	gap: 30px;
	width: 100%;
`;

const MainTitle = styled.p`
	font-size: 45px;
	font-weight: 500;
`;

const MainFormButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	background-color: #fff;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 120px;
`;

const ButtonTitle = styled.p`
	font-size: 30px;
	font-weight: 500;
`;
