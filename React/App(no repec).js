import React, { useState } from "react";
import "./App.css";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: "React 공부하기", content: "React 강의 듣고 정리하기", set: false },
	]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const contentChangeHandler = (event) => {
		setContent(event.target.value);
	};

	const clickAddButtonHandler = () => {
		const newToDo = {
			id: todos.length + 1,
			title,
			content,
			set: false,
		};
		console.log(newToDo);
		setTodos([...todos, newToDo]);
		setTitle("");
		setContent("")
	};

	const deleteUserHandler = (id) => {
		const deleteTodo = todos.filter((todo) => todo.id !== id);
		setTodos(deleteTodo);
	};

	const successTodoButton = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					set: true,
				};
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const cancelTodoButton = (id) => {
		const cancleTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					set: false,
				};
			}
			return todo;
		});
		setTodos(cancleTodos);
	};

	const inProgressTodos = todos.filter((todo) => !todo.set);
	const comletedTodos = todos.filter((todo) => todo.set);

	return (
		<div>
			<header className='header'>
				<span>My Todo List</span>
				<span>React</span>
			</header>
			<div className='new-todo'>
				<div className='input-section'>
					제목:
					<input value={title} onChange={titleChangeHandler} />
					내용:
					<input value={content} onChange={contentChangeHandler} />
				</div>
				<button onClick={clickAddButtonHandler}>추가하기</button>
			</div>
			<div className='todo-working'>
				<h2>Working...🔥</h2>
				<div className='card-container'>
					{inProgressTodos.map((list) => {
						return (
							<div key={list.id} className='todo-card'>
								<div className='todo-content'>
									<h3>{list.title}</h3>
									<p>{list.content}</p>
									<div className='todo-button'>
										<button onClick={() => deleteUserHandler(list.id)}>삭제하기</button>
										<button onClick={() => successTodoButton(list.id)}>완료</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='todo-done'>
				<h2>Done...🎉</h2>
				<div className='card-container'>
					{comletedTodos.map((list) => {
						return (
							<div key={list.id} className='todo-card'>
								<div className='todo-content'>
									<h3>{list.title}</h3>
									<p>{list.content}</p>
									<div className='todo-button'>
										<button onClick={() => deleteUserHandler(list.id)}>삭제하기</button>
										<button onClick={() => cancelTodoButton(list.id)}>취소</button>
									</div>
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
