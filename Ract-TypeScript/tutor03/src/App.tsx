import React, { useState } from "react";
import { TodoList } from "./Components/TodoList";
import { NewTodo } from "./Components/NewTodo";
import { Todo } from "./model/todo.model";

export const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const todoHandler = (text: string) => {
		setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text }]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div className='App'>
			<NewTodo onAddTodo={todoHandler} />
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);
};
