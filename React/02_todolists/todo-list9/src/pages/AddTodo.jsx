import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos, __postTodos } from "../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodo() {
	//! thunk api
	const { todos, isLoding, isError } = useSelector((state) => state.todoSlice);
	console.log("🚀 ~ file: AddTodo.jsx:16 ~ isError:", isError);
	console.log("🚀 ~ file: AddTodo.jsx:16 ~ isLoding:", isLoding);
	console.log("🚀 ~ file: AddTodo.jsx:16 ~ todos:", todos);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(__getTodos());
	}, [dispatch]);

	const [inputs, setInputs] = useState({ name: "", title: "", content: "", set: false });

	const { name, title, content } = inputs;

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const todoAddButtonHandler = async (event) => {
		event.preventDefault();

		const fields = {
			name: "이름을 입력해 주세요.",
			title: "제목을 입력해 주세요.",
			content: "내용을 입력해 주세요.",
		};

		for (let field in fields) {
			if (inputs[field].trim() === "") {
				alert(fields[field]);
				return;
			}
		}

		const newTodo = { ...inputs, id: Date.now() };

		await dispatch(__postTodos(newTodo));
		setInputs({ id: "", name: "", title: "", content: "", set: false });
		navigate("/todo");
	};

	if (isLoding) <div>로딩중</div>;
	return (
		<AddTodoContainer>
			<AddInputTitle>{"작성자"}</AddInputTitle>
			<AddTodoInput
				name='name'
				value={name}
				placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
				maxLength={5}
				onChange={onChange}
			/>
			<AddInputTitle>{"제목"}</AddInputTitle>
			<AddTodoInput
				name='title'
				value={title}
				placeholder='제목을 입력해주세요. (50자 이내)'
				maxLength={50}
				onChange={onChange}
			/>
			<AddInputTitle>{"내용"}</AddInputTitle>
			<AddTodoTextarea
				name='content'
				value={content}
				placeholder='내용을 입력해 주세요.(200자 이내)'
				maxLength={200}
				rows='10'
				onChange={onChange}
			/>
			<AddButton onClick={todoAddButtonHandler}>{"추가하기"}</AddButton>
		</AddTodoContainer>
	);
}

export default AddTodo;

const AddTodoContainer = styled.form`
	display: flex;
	align-items: start;
	justify-content: space-between;
	flex-direction: column;
	gap: 10px;
	margin-top: 30px;
	padding: 30px;
	/* width: 100%; */
	height: 100%;
`;

const AddInputTitle = styled.p`
	font-size: 30px;
	font-weight: 500;
`;

const AddTodoInput = styled.input`
	border: 1px solid lightgray;
	border-radius: 10px;
	box-sizing: border-box;
	outline: none;
	margin-bottom: 10px;
	padding: 0 15px;
	width: 100%;
	height: 50px;
`;

const AddTodoTextarea = styled.textarea`
	margin-bottom: 10px;
	padding: 15px;
	border: 1px solid lightgray;
	border-radius: 10px;
	outline: none;
	box-sizing: border-box;
	width: 100%;
	height: 300px;
`;

const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: #fff;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 50px;
`;
