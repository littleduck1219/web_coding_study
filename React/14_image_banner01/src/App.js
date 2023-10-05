import { useState } from "react";
import PostList from "./PostList";
import "./App.css";

// 이미지들을 동적으로 임포트
function importAll(r) {
	return r.keys().map(r);
}

const images = importAll(require.context("./img", false, /\.(jpg)$/));

function App() {
	const [posts, setPosts] = useState([
		{
			title: "첫 번째 게시글",
			images: [images[0], images[1], images[2], images[3], images[4], images[5], images[6]],
		},
		{
			title: "두 번째 게시글",
			images: [images[7], images[8]],
		},
		{
			title: "세 번째 게시글",
			images: [images[9], images[10], images[11]],
		},
		{
			title: "네 번째 게시글",
			images: [images[12]],
		},
		{
			title: "세 번째 게시글",
			images: [images[9], images[10], images[11], images[12]],
		},
		{
			title: "세 번째 게시글",
			images: [images[13], images[14], images[15], images[16], images[17], images[18], images[19], images[18]],
		},
		{
			title: "얄 번째 게시글",
			images: [images[9], images[10], images[11], images[12]],
		},
	]);
	return (
		<div className='app'>
			<h1>게시글 리스트</h1>
			<PostList posts={posts} />
		</div>
	);
}

export default App;
