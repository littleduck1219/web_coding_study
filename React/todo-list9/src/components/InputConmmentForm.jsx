import React from "react";
import styled from "styled-components";

function InputConmmentForm() {
	return (
		<div>
			<CommentInputContainer>
				<CommentName type='text' maxLength={4} placeholder='이름(5자 이내)' />
				<CommentText type='text' maxLength={100} placeholder='댓글을 추가하세요.(100자 이내)' />
				<CommentAddButton>{"추가하기"}</CommentAddButton>
			</CommentInputContainer>
		</div>
	);
}

export default InputConmmentForm;

const CommentInputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	width: 100%;
`;

const CommentName = styled.input`
	padding-left: 10px;
	border: 1px solid lightgray;
	border-radius: 10px;
	background-color: none;
	width: 200px;
	height: 40px;
`;

const CommentText = styled.input`
	padding-left: 10px;
	border: 1px solid lightgray;
	border-radius: 10px;
	background-color: none;
	width: 1250px;
	height: 40px;
`;

const CommentAddButton = styled.button`
	border: 1px solid lightgray;
	border-radius: 10px;
	background-color: white;
	width: 200px;
	height: 40px;
`;
