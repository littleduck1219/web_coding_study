import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useSelector, useDispatch } from "react-redux";
import { SelectComment } from "../redux/modules/commentSlice";
import * as action from "../redux/modules/commentSlice";

function InputCommentForm() {
	// const comentLists = useSelector(SelectComment);
	const dispatch = useDispatch();
	const [comments, setComments] = useState({
		username: "",
		comment: "",
	});

	// const { username, comment } = comments;

	const onChangeComment = (event) => {
		const { value, name } = event.target;
		setComments({
			...comments,
			[name]: value,
		});
	};

	const addCommentButton = (event) => {
		event.preventDefault();

		const fields = {
			username: "이름을 입력해 주세요",
			comment: "내용을 입력해 주세요",
		};

		for (let field in fields) {
			if (comments[field].trim() === "") {
				alert(fields[field]);
				return;
			}
		}
		const id = nextId();
		const newComment = { ...comments, id };
		dispatch(action.add_comment(newComment));
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
				<CommentAddButton onClick={addCommentButton}>{"추가하기"}</CommentAddButton>
			</CommentInputContainer>
		</CommentInputForm>
	);
}

export default InputCommentForm;

const CommentInputForm = styled.form`
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
