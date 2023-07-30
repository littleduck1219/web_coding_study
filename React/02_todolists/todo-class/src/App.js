import uuid from "react-uuid";
import React, { useState } from "react";
import "./App.css";

function App() {
	console.log(uuid());
	const [todos, setTodos] = useState([
		{ id: uuid(), title: "제목1", contents: "내용", isDone: false },
		{ id: uuid(), title: "제목2", contents: "내용", isDone: false },
		{ id: uuid(), title: "제목3", contents: "내용", isDone: false },
		{ id: uuid(), title: "제목4", contents: "내용", isDone: true },
	]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	// const todoList = todos.filter(function (todo) {
	// 	return todo.isDone === false;
	// });
	// const doneList = todos.filter(function (todo) {
	// 	return todo.isDone === true;
	// });

	return (
		<div>
			<header style={{ backgroundColor: "#a65fcf", padding: "10px;" }}>헤더</header>
			<main style={{ backgroundColor: "#9eaff0", padding: "10px;" }}>
				<div>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							const newTodo = {
								id: uuid(),
								title,
								content,
								isDone: false,
							};

							setTodos([...todos, newTodo]);
						}}>
						<input
							value={title}
							onChange={(event) => {
								setTitle(event.target.value);
							}}
						/>
						<input
							value={content}
							onChange={(event) => {
								setContent(event.target.value);
							}}
						/>
						<button>입력</button>
					</form>
				</div>
				<div>
					<h1>리스트 영역</h1>
					<div>
						<h2>할일 목록</h2>
						{todos
							.filter((todo) => todo.isDone === false)
							.map((todo) => {
								return (
									<div
										style={{
											border: "1px solid black",
											margin: "10px",
											paddingLeft: "10px",
											paddingBottom: "20px",
										}}>
										<p>{todo.id}</p>
										<h3>{todo.title}</h3>
										<p>{todo.contents}</p>
										<p>완료여부 : {todo.isDone.toString()}</p>
										<button
											onClick={() => {
												const deleteTodos = todos.filter((item) => {
													return item.id !== todo.id;
												});
												setTodos(deleteTodos);
											}}>
											삭제
										</button>
										<button
											onClick={() => {
												const newTodos = todos.map((item) => {
													if (item.id === todo.id) {
														return {
															...item,
															isDone: !item.isDone,
														};
													} else {
														return item;
													}
												});
												setTodos(newTodos);
											}}>
											완료
										</button>
									</div>
								);
							})}
					</div>
					<div>
						<h2>완료된 목록</h2>
						{todos
							.filter((todo) => todo.isDone === true)
							.map((todo) => {
								return (
									<div
										style={{
											border: "1px solid black",
											margin: "10px",
											paddingLeft: "10px",
											paddingBottom: "20px",
										}}>
										<p>{todo.id}</p>
										<h3>{todo.title}</h3>
										<p>{todo.contents}</p>
										<p>완료여부 : {todo.isDone.toString()}</p>
										<button
											onClick={() => {
												const deleteTodos = todos.filter((item) => {
													return item.id !== todo.id;
												});
												setTodos(deleteTodos);
											}}>
											삭제
										</button>
										<button
											onClick={() => {
												const cancelTodos = todos.map((item) => {
													if (item.id === todo.id) {
														return {
															...item,
															isDone: !item.isDone,
														};
													} else {
														return item;
													}
												});
												setTodos(cancelTodos);
											}}>
											취소
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</main>
			<footer
				style={{
					backgroundColor: "#66b7ed",
					padding: "10px;",
				}}>
				푸터
			</footer>
		</div>
	);
}

export default App;
