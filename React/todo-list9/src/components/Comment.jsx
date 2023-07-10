import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectTodo } from "../redux/modules/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import * as action from "../redux/modules/todoSlice";
import { styled } from "styled-components";
import InputConmmentForm from "./InputConmmentForm";

function Comment() {
	const todoList = useSelector(SelectTodo);
	const dispatch = useDispatch();
	const { id } = useParams();
	const todo = todoList.find((todo) => todo.id === id);

	const [modalShow, setModalShow] = useState();

	const ModalStateChange = () => {
		setModalShow((pre) => !pre);
	};

	return (
		<CommentContainer>
			<InputCommentTitle onClick={ModalStateChange}>
				{modalShow ? "눌러서 댓글 내리기" : "눌러서 댓글 보기"}
			</InputCommentTitle>
			<InputConmmentForm></InputConmmentForm>
		</CommentContainer>
	);
}

export default Comment;

const CommentContainer = styled.div`
	position: absolute;
	bottom: 0px;
`;

const InputCommentTitle = styled.div`
	margin-bottom: 20px;
	font-size: 25px;
`;
