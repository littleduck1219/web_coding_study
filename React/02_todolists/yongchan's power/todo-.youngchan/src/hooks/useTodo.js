import { useState } from "react";
import { todoLists } from "../js/todos";
import uuid from "react-uuid";

export const useTodo = () => {
	// const [todos, setTodos] = useState(todoLists);
	const [inputvalue, setInputvalue] = useState({
		title: "dd",
		content: "",
	});

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setInputvalue({ ...inputvalue, [name]: value });
	};

	// const [title, setTitle] = useState("");
	// const [content, setContent] = useState("");
	// const titleChangeHandler = (event) => {
	// 	setTitle(event.target.value);
	// };
	// const contentChangeHandler = (event) => {
	// 	setContent(event.target.value);
	// };

	const clickAddButtonHandler = () => {
		const newToDo = { ...inputvalue, id: uuid(), set: false };
		console.log(newToDo);
		setTodos([...todos, newToDo]);
		// setTitle("");
		// setContent("");
		setInputvalue({
			title: "",
			content: "",
		});
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

	const { inProgressTodos, comletedTodos } = todos.reduce(
		(acc, list) => {
			if (list.set) {
				acc.comletedTodos.push(list);
			} else {
				acc.inProgressTodos.push(list);
			}
			return acc;
		},
		{ inProgressTodos: [], comletedTodos: [] }
	);

	return {
		// title,
		// titleChangeHandler,
		// content,
		// contentChangeHandler,
		inputvalue,
		onChangeInput,
		clickAddButtonHandler,
		deleteUserHandler,
		successTodoButton,
		inProgressTodos,
		cancleTodoButton,
		comletedTodos,
	};
};
