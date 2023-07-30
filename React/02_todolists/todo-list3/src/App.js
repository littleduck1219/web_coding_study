import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
	const [lists, setLists] = useState([
		{ id: 1, title: "세번째 todo-list 제작", content: "세번째여!", set: false },
		{ id: 2, title: "세번째 todo-list 제작", content: "세번째여!", set: false },
		{ id: 3, title: "세번째 todo-list 제작", content: "세번째여!", set: false },
		{ id: 4, title: "세번째 todo-list 제작", content: "세번째여!", set: false },
	]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const titleChangeHandler = (title) => {
		setTitle(title.target.value);
	};

	const contentChangeHandler = (content) => {
		setContent(content.target.value);
	};

	const todoAddButtonHandler = () => {
		const newTodo = {
			id: lists.length + 1,
			title,
			content,
			set: false,
		};
		setLists([...lists, newTodo]);
		setTitle("");
		setContent("");
	};

	const todoRemoveButtonHandler = (id) => {
		const removeTodo = lists.filter((list) => list.id !== id);
		setLists(removeTodo);
	};

	const todoCompleteButtonHandler = (id) => {
		const completeTodo = lists.map((list) => {
			if (list.id === id) {
				return {
					...list,
					set: true,
				};
			}
			return list;
		});
		setLists(completeTodo);
	};

	const todoCancelButtonHandler = (id) => {
		const cancelTodo = lists.map((list) => {
			if (list.id === id) {
				return {
					...list,
					set: false,
				};
			}
			return list;
		});
        setLists(cancelTodo);
	};

	const inProgressTodos = lists.filter((list) => !list.set);
	const completedTodos = lists.filter((list) => list.set);

	return (
		<div>
			<header>
				<p>My Todo List</p>
				<p>React</p>
			</header>
			<div>
				<div>
					제목 : <input value={title} onChange={titleChangeHandler} />
					내용 : <input value={content} onChange={contentChangeHandler} />
				</div>
				<button onClick={todoAddButtonHandler}>추가하기</button>
			</div>
			<div className='Todo-Working'>
				<h2>Working...🔥</h2>
				<div className='Card-Container'>
					{inProgressTodos.map((list) => {
						return (
							<div key={list.id} className='Card'>
								<div className='Card-Content'>
									<h2>{list.title}</h2>
									<p>{list.title}</p>
								</div>
								<button onClick={() => todoRemoveButtonHandler(list.id)}>삭제하기</button>
								<button onClick={() => todoCompleteButtonHandler(list.id)}>완료</button>
							</div>
						);
					})}
				</div>
			</div>
			<div className='Todo-Working'>
				<h2>Done...🎉</h2>
				<div className='Card-Container'>
					{completedTodos.map((list) => {
						return (
							<div key={list.id} className='Card'>
								<div className='Card-Content'>
									<h2>{list.title}</h2>
									<p>{list.title}</p>
								</div>
								<button onClick={() => todoRemoveButtonHandler(list.id)}>삭제하기</button>
								<button onClick={() => todoCancelButtonHandler(list.id)}>취소</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
