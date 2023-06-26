import React, { useState } from "react";
import "./App.css";
import { todoLists } from "./js/todos";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";

function App() {
	const [todos, setTodos] = useState(todoLists);
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
			id: Date.now(),
			title,
			content,
			set: false,
		};
		console.log(newToDo);
		setTodos([...todos, newToDo]);
		setTitle("");
		setContent("");
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

	const cancleTodoButton = (id) => {
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

	const { inProgressTodos, comletedTodos } = lists.reduce(
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
		<div className="layout">
			<Header />
			<Form
				title={title}
				titleChangeHandler={titleChangeHandler}
				content={content}
				contentChangeHandler={contentChangeHandler}
				clickAddButtonHandler={clickAddButtonHandler}
			/>
			<TodoLists
				title='Working...🔥'
				todoClassName='todo-working'
				type={false}
				deleteUserHandler={deleteUserHandler}
				toggleTodoButton={successTodoButton}
				todo={inProgressTodos}
			/>

			{/* Done */}
			<TodoLists
				title='Done...🎉'
				todoClassName='todo-done'
				type={true}
				deleteUserHandler={deleteUserHandler}
				toggleTodoButton={cancleTodoButton}
				todo={comletedTodos}
			/>
		</div>
	);
}
export default App;
