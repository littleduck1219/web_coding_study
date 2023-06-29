import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: "React어려워용" },
		{ id: 2, title: "React어려워용" },
		{ id: 3, title: "React어려워용" },
		{ id: 4, title: "React어려워용" },
		{ id: 5, title: "React어려워용" },
	]);
	const [title, setTitle] = useState("");

	const todoInputHander = (event) => {
		setTitle(event.target.value);
	};

	const todoAddButtonHandler = () => {
		const newTodo = {
			id: uuid(),
			title,
		};
		setTodos([...todos, newTodo]);
		setTitle("");
	};

	return (
		<div className='layout'>
			<header></header>
			<main>
				<div className='form-content'>
					<input value={title} onChange={todoInputHander} />
					<button onClick={todoAddButtonHandler}>추가하기</button>
				</div>
				<h1>Todo List</h1>
				<div className='card-container'>
					{todos.map((todo) => {
						return (
							<div key={todo.id} className='card'>
								<p>{todo.title}</p>
							</div>
						);
					})}
				</div>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
