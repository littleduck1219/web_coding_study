import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { SelectComment } from "../redux/modules/commentSlice";

function CommentLists() {
	const todoComment = useSelector(SelectComment);
	console.log("🚀 ~ file: CommentLists.jsx:8 ~ CommentLists ~ todoComment:", todoComment);

	const dispatch = useDispatch();

	const [commentEdit, setCommentEdit] = useState(false);

	return (
		<CommentListsContainer>
			<CommentContainer>
				{todoComment.map((comment) => {
					return (
						<div key={comment.id}>
							<div>{comment.username}</div>
							<div>{comment.content}</div>
						</div>
					);
				})}
			</CommentContainer>
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
	height: 50px;
	padding: 12px;
`;
