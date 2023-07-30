import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
	const [todo, setTodo] = useState([{ id: 1, title: "리액트 공부", content: "투두리스트 만들기", set: false }]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const inputTitleHandler = (event) => {
		setTitle(event.target.value);
	};
	const inputContentHandler = (event) => {
		setContent(event.target.value);
	};

	const todoAddButtonHandler = () => {
		const newTodo = {
			id: Date.now(),
			title,
			content,
			set: false,
		};
		console.log(newTodo);
		setTodo([...todo, newTodo]); //객체를 풀어서 집어넣어야 한다.
		setTitle("");
		setContent("");
	};

	const deleteTodoList = (id) => {
		const deleteTodo = todo.filter((item) => item.id !== id);
		setTodo(deleteTodo);
	};
	const completeTodoList = (id) => {
		const completeTodo = todo.map((item) => {
			if (item.id === id) {
				return {
					...item,
					set: true,
				};
			}
			return item;
		});
		setTodo(completeTodo);
	};

	const cancelTodoList = (id) => {
		const cancelTodo = todo.map((item) => {
			if (item.id === id) {
				return {
					...item,
					set: false,
				};
			}
			return item;
		});
		setTodo(cancelTodo);
	};

	// const inProgressTodo = todo.filter((item) => !item.set)
	// const successTodo = todo.filter((item) => item.set)

	const { inProgressTodo, successTodo } = todo.reduce(
		(acc, item) => {
			if (item.set) {
				acc.successTodo.push(item);
			} else {
				acc.inProgressTodo.push(item);
			}
			return acc;
		},
		{ inProgressTodo: [], successTodo: [] }
	);

	return (
		<div className='container'>
			<div className='header'>
				<div>My Todo List</div>
				<div>React</div>
			</div>
			<div className='input-container'>
				<div className='input-content'>
					제목 : <input type='text' value={title} onChange={inputTitleHandler}></input>
					내용 : <input type='text' value={content} onChange={inputContentHandler}></input>
				</div>
				<button onClick={todoAddButtonHandler}>추가하기</button>
			</div>
			<div className='working'>
				<p>Working...🔥</p>
				<div className='to-do-list'>
					{inProgressTodo.map((item) => {
						return (
							<div key={item.id}>
								<div>{item.title}</div>
								<div>{item.content}</div>
								<div>
									<button onClick={() => deleteTodoList(item.id)}>삭제하기</button>
									<button onClick={() => completeTodoList(item.id)}>완료</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='done'>
				<p>Done...🔥</p>
				<div className='to-do-list'>
					{successTodo.map((item) => {
						return (
							<div key={item.id}>
								<div>{item.title}</div>
								<div>{item.content}</div>
								<div>
									<button onClick={() => deleteTodoList(item.id)}>삭제하기</button>
									<button onClick={() => cancelTodoList(item.id)}>취소</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default App;
