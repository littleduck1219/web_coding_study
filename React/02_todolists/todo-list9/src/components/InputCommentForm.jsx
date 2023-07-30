import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __postComments } from "../redux/modules/todoSlice";
import { useParams } from "react-router-dom";

function InputCommentForm() {
	const thunk = useSelector((state) => state.todoSlice);
	const { id } = useParams();
	const dispatch = useDispatch();

	const todosId = thunk.todos.map((todo) => todo.id);

	const [comments, setComments] = useState({
		username: "",
		comment: "",
	});

	const onChangeComment = (event) => {
		const { value, name } = event.target;
		setComments({
			...comments,
			[name]: value,
		});
	};

	const addCommentButton = (id) => () => {
		const newComment = {
			id: id + Date.now(),
			todoid: id,
			username: comments.username,
			comment: comments.comment,
		};
		console.log(newComment);
		dispatch(__postComments(newComment));
		setComments({ id: "", username: "", comment: "" });
	};

	return (
		<CommentInputForm>
			<CommentInputContainer>
				<CommentName
					type='text'
					name='username'
					value={comments.username}
					maxLength={5}
					placeholder='이름(5자 이내)'
					onChange={onChangeComment}
				/>
				<CommentText
					type='text'
					name='comment'
					value={comments.comment}
					maxLength={100}
					placeholder='댓글을 추가하세요.(100자 이내)'
					onChange={onChangeComment}
				/>
				<CommentAddButton onClick={addCommentButton(id)}>{"추가하기"}</CommentAddButton>
			</CommentInputContainer>
		</CommentInputForm>
	);
}

export default InputCommentForm;

const CommentInputForm = styled.div`
	width: 100%;
`;

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
	width: 300px;
	height: 40px;
`;

const CommentAddButton = styled.button`
	border: 1px solid lightgray;
	border-radius: 10px;
	background-color: white;
	width: 200px;
	height: 40px;
`;
