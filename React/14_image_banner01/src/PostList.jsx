import React from "react";
import styled from "styled-components";
import PostPreview from "./PostPreview";

function PostList({ posts }) {
	return (
		<PostListContainer className='post-list'>
			{posts.map((post, index) => (
				<PostItem key={index}>
					<h2>{post.title}</h2>
					<PostPreview images={post.images} />
				</PostItem>
			))}
		</PostListContainer>
	);
}

export default PostList;

const PostItem = styled.div`
	margin: auto;
	margin-bottom: 20px;
`;

const PostListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
