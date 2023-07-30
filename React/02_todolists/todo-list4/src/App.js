import React, { useState } from "react";
import "./App.css";

function App() {
	const [lists, setLists] = useState([
		{ id: 1, title: "4번째", content: "우랴랴랴랴랴랴랑아아1", set: false },
		{ id: 2, title: "4번째", content: "우랴랴랴랴랴랴랑아아2", set: false },
		{ id: 3, title: "4번째", content: "우랴랴랴랴랴랴랑아아3", set: false },
		{ id: 4, title: "4번째", content: "우랴랴랴랴랴랴랑아아4", set: false },
	]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const titleChangeHandler = (title) => {
		setTitle(title.target.value);
	};

	const contentChangeHandler = (content) => {
		setTitle(content.target.value);
	};

	const addListButtonHandler = () => {
		const addList = {
			id: Date.now(),
			title,
			content,
			set: false,
		};
		setLists([...lists, addList]);
		setTitle("");
		setContent("");
	};

	const deleteListButtonHandler = (id) => {
		const deleteList = lists.filter((list) => list.id !== id);
		setLists(deleteList);
	};

	const completeListButtonHandler = (id) => {
		const completeList = lists.map((list) => {
			if (list.id === id) {
				return {
					...list,
					set: true,
				};
			}
			return list;
		});
		setLists(completeList);
	};

	const { inProgressTodos, completedTodos } = lists.reduce(
		(acc, list) => {
			if (list.set) {
				acc.completedTodos.push(list);
			} else {
				acc.inProgressTodos.push(list);
			}
			return acc;
		},
		{ inProgressTodos: [], completedTodos: [] }
	);

	return (
		<div>
			<header>
				<span>My Todo List</span>
				<span>React</span>
			</header>
			<div>
				<div>
					<input onChange={titleChangeHandler} />
					<input onChange={contentChangeHandler} />
					<button onClick={addListButtonHandler}>추가하기</button>
				</div>
			</div>
			<div>
				<h2>Working...🔥</h2>
				<div className='card-container'>
					{inProgressTodos.map((list) => {
						return (
							<div key={list.id} className='card'>
								<div className='content'>
									<h3>{list.title}</h3>
									<span>{list.content}</span>
								</div>
								<button onClick={() => deleteListButtonHandler(list.id)}>삭제하기</button>
								<button onClick={() => completeListButtonHandler(list.id)}>완료</button>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<h2>Done...🎉</h2>
				<div className='card-container'>
					{completedTodos.map((list) => {
						return (
							<div key={list.id} className='card'>
								<div className='content'>
									<h3>{list.title}</h3>
									<span>{list.content}</span>
								</div>
								<button onClick={() => deleteListButtonHandler(list.id)}>삭제하기</button>
								<button onClick={() => completeListButtonHandler(list.id)}>취소</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
