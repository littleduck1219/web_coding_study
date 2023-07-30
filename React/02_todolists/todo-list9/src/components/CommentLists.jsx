import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { __deleteComments, __getComments, __updateComments } from "../redux/modules/todoSlice";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

function CommentLists() {
	const { comments } = useSelector((state) => state.todoSlice);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getComments());
	}, [dispatch]);

	const [newComment, setNewComment] = useState("");
	const [commentEdit, setCommentEdit] = useState(false);

	const commentEditHandler = () => {
		setCommentEdit(!commentEdit);
	};

	const commentUpdateHandler = (comment) => () => {
		const updateComment = {
			id: comment.id,
			todoid: comment.todoid,
			username: comment.username,
			comment: newComment,
		};
		console.log(comment.todoid);
		dispatch(__updateComments(updateComment));
		dispatch(__getComments());
		setCommentEdit(!commentEdit);
	};

	const commentDeleteHandler = (id) => () => {
		dispatch(__deleteComments(id));
	};

	return (
		<CommentListsContainer>
			{!commentEdit ? (
				<CommentContainer>
					{comments.map((comment) => {
						return (
							<Comment key={comment.id}>
								<CommentText>
									<CommentTitle>{comment.username}</CommentTitle>
									<CommentContent>{comment.comment}</CommentContent>
								</CommentText>
								<CommentIcon>
									<CommentEdit onClick={commentEditHandler}>
										<FiEdit2 color='white' />
									</CommentEdit>
									<CommentDelete onClick={commentDeleteHandler(comment)}>
										<FaTrashAlt color='white' />
									</CommentDelete>
								</CommentIcon>
							</Comment>
						);
					})}
				</CommentContainer>
			) : (
				<CommentContainer>
					{comments.map((comment) => {
						return (
							<Comment key={comment.id}>
								<CommentEditInput />

								<CommentIcon>
									<CommentEdit onClick={commentEditHandler}>
										<p>{"취소"}</p>
									</CommentEdit>
									<CommentDelete onClick={commentUpdateHandler(comment)}>
										<p>{"저장"}</p>
									</CommentDelete>
								</CommentIcon>
							</Comment>
						);
					})}
				</CommentContainer>
			)}
		</CommentListsContainer>
	);
}

export default CommentLists;

const CommentListsContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: start;
	flex-direction: column;
	height: 200px;
`;

const CommentContainer = styled.div`
	padding: 12px;
	height: 50px;
	width: 100%;
`;

const Comment = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	margin-top: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid lightgray;
	width: 100%;
`;

const CommentTitle = styled.p`
	font-size: 10px;
`;

const CommentContent = styled.p`
	font-size: 20px;
`;

const CommentText = styled.div``;

const CommentIcon = styled.div`
	display: flex;
	gap: 5px;
`;

const CommentEdit = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background-color: red;
	width: 30px;
	height: 30px;
`;

const CommentDelete = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background-color: red;
	width: 30px;
	height: 30px;
`;

const CommentEditInput = styled.input``;
