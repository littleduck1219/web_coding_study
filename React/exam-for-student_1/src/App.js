import { useState } from "react";
import uuid from "react-uuid"; // 고유 id생성
import "./App.css";

function App() {
	const [todos, setTodos] = useState([
		// todo와 그 상태를 변경하는 setTodo 함수 선언 초기 상태는 배열
		{ id: 1, title: "React어려워용" },
		{ id: 2, title: "React어려워용" },
		{ id: 3, title: "React어려워용" },
		{ id: 4, title: "React어려워용" },
		{ id: 5, title: "React어려워용" },
	]);
	const [title, setTitle] = useState(""); // title과 그 상태를 변경하는 setTitle 함수 선언 초기 상태 빈값

	const todoInputHander = (event) => {
		// 입력된 값의 value를 title에 업데이트
		setTitle(event.target.value); // title에 업데이트
	};

	const todoAddButtonHandler = () => {
		// 버튼동작시 새로운 배열을 todos에 추가
		const newTodo = {
			id: uuid(), // 랜덤 Id 생성
			title, // 입력한 title
		};
		setTodos([...todos, newTodo]); // 기존 항목을 새 배열에 복사하고 그 뒤에 새로운 배열 추가
		setTitle(""); // title을 초기화
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
					{/* todos 배열의 객체 처리 */}
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
