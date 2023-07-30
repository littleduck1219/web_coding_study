import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";
import { useTodo } from "./hooks/useTodo";

function App() {
	const {
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
	} = useTodo();

	return (
		<div className='layout'>
			<Header />
			<Form
				// title={title}
				// titleChangeHandler={titleChangeHandler}
				// content={content}
				// contentChangeHandler={contentChangeHandler}
				inputvalue={inputvalue}
				onChangeInput={onChangeInput}
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
