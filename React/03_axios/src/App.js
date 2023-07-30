import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import api from "./axios/api";

function App() {
	const [todos, setTodos] = useState(null);
	const [inputValue, setInputValue] = useState({
		title: "",
	});

	const [targetId, setTargetId] = useState("");
	const [editText, setEditText] = useState("");

	//! console.log 출력시 pendig으로 출력된다 ==> axios요청을 한 직후, 응답을 받기전에 다음 줄로 넘어가서 그렇다.
	//! async 블록 안에서 await를 만나면 이 줄이 끝날때 까지 기다려 준다. response를 할당 받을 때 까지 기다려 준다.
	//! data 구조분해 할당 {config, data, headers, request, status, statusText}  중에서 data를 바로 가져온다.
	const fetchTodos = async () => {
		// const { data } = await axios.get("http://localhost:4000/todos");
		const { data } = await api.get("/todos");
		console.log("🚀 ~ file: App.js:8 ~ fetchTodos ~ data:", data);
		setTodos(data);
	};

	//! 추가 함수
	const onSubmitHandler = async () => {
		api.post("/todos", inputValue);
		// setTodos([...todos, inputValue]); //! DB에는 id가 자동으로 입력되지만 어떻게 입력되는지 알수 없다.
		fetchTodos(); //! fetch를 사용해서 DB의 내용을 받아온다.
		setInputValue({ title: "" });
	};

	//! 삭제 함수
	const onDeleteButtonHandler = async (id) => {
		console.log("🚀 ~ file: App.js:26 ~ onDeleteButtonHandler ~ id:", id);
		try {
			await api.delete(`/todos/${id}`);

			setTodos(
				todos.filter((todo) => {
					return todo.id !== id;
				})
			);
		} catch (error) {
			console.log("🚀 ~ file: App.js:35 ~ onDeleteButtonHandler ~ error:", error);
		}
	};

	const onUpdateButtonHandler = async (targetId, editText) => {
		await api.patch(`todos/${targetId}`, {
			title: editText,
		});
		setTodos(
			todos.map((item) => {
				//! id의 형이 달라서 일치연산자를 사용해준다. targetId:string item.id:number
				if (item.id == targetId) {
					console.log("🚀 ~ file: App.js:54 ~ todos.map ~ targetId:", typeof targetId);
					console.log("🚀 ~ file: App.js:54 ~ todos.map ~ item.id:", typeof item.id);

					return { ...item, title: editText };
				} else {
					return item;
				}
			})
		);
	};

	//! 마운트 됬을때 DB로 부터 값을 가져온다.
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			{/* 수정 영역 */}
			<div>
				<input
					type='text'
					placeholder='수정할 아이디'
					value={targetId}
					onChange={(event) => {
						setTargetId(event.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='수정할 내용'
					value={editText}
					onChange={(event) => {
						setEditText(event.target.value);
					}}
				/>
				<button onClick={() => onUpdateButtonHandler(targetId, editText)}>수정</button>
			</div>
			{/* INPUT 영역 */}
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmitHandler();
				}}>
				<input
					type='text'
					value={inputValue.title}
					onChange={(event) => {
						setInputValue({ title: event.target.value });
					}}
				/>
				{/* 버튼 클릭시, input에 들어있는 state를 이용하여 db에 저장(post 요청) */}
				<button>추가</button>
			</form>

			{/* 데이터 영역 */}
			{/* async의 경우 아래 컴포넌트가 먼저 렌더링이 된 후에 async 함수가 실행된다.  */}
			{/* 옵셔널 체이닝으로 해결할}수 있다.*/}
			<div>
				{todos?.map((item) => {
					return (
						<div key={item.id}>
							{item.id} : {item.title}
							&nbsp;<button onClick={() => onDeleteButtonHandler(item.id)}>삭제</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
