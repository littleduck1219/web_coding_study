import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Header from "./components/Header";
import Submit from "./components/Form";
import TodoLIsts from "./components/TodoLIsts";
import { useSelector, useDispatch } from "react-redux";
import { SetTodo, add_todo, delete_todo, update_todo } from "./redux/modules/todoReducer";

function App() {
	// const [lists, setLists] = useState({});
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const todoList = useSelector(SetTodo);
	const dispatch = useDispatch();

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const contentChangeHandler = (event) => {
		setContent(event.target.value);
	};

	const clickAddButtonHandler = () => {
		const newTodo = {
			id: uuid(),
			title,
			content,
			set: false,
		};
		// console.log(newTodo);
		console.log(add_todo(newTodo));
		dispatch(add_todo(newTodo));
		// setLists(newTodo);
		setTitle("");
		setContent("");
	};

	const deleteTodoHandler = (id) => {
		dispatch(delete_todo(id));
		// const deleteTodo = lists.filter((list) => list.id !== id);
		// setLists(deleteTodo);
	};

	const successTodoHandler = (id) => {
		// const successTodo = lists.map((list) => {
		// 	if (list.id === id) {
		// 		return {
		// 			...list,
		// 			set: true,
		// 		};
		// 	}
		// 	return list;
		// });
		// setLists(successTodo);
		dispatch(update_todo(id));
	};

	const cancelTodoHandler = (id) => {
		// const cancelTodo = SetTodo.map((list) => {
		// 	if (list.id === id) {
		// 		return {
		// 			...list,
		// 			set: false,
		// 		};
		// 	}
		// 	return list;
		// });
		// setLists(cancelTodo);
		dispatch(update_todo(id));
	};

	const inProgressTodos = todoList.filter((list) => !list.set);
	const completeTodos = todoList.filter((list) => list.set);

	return (
		<div>
			<Header />
			<Submit
				title={title}
				titleChangeHandler={titleChangeHandler}
				content={content}
				contentChangeHandler={contentChangeHandler}
				clickAddButtonHandler={clickAddButtonHandler}
			/>
			<TodoLIsts
				title='Working...🔥'
				condition={inProgressTodos}
				type={false}
				deleteTodoHandler={deleteTodoHandler}
				toggleTodoHandler={successTodoHandler}
			/>
			<TodoLIsts
				title='Done...🎉'
				condition={completeTodos}
				type={true}
				deleteTodoHandler={deleteTodoHandler}
				toggleTodoHandler={cancelTodoHandler}
			/>
		</div>
	);
}

export default App;
