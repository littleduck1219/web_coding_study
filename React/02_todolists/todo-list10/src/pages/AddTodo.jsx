import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useSelector, useDispatch } from "react-redux";
import { SelectTodo } from "../redux/modules/todoSlice";
import * as action from "../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodo() {
	const todoLists = useSelector(SelectTodo);
	console.log("🚀 ~ file: AddTodo.jsx:11 ~ todoLists:", todoLists);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({ name: "", title: "", content: "", set: false });

	const { name, title, content } = inputs;

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const todoAddButtonHandler = (event) => {
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

		//! nextId 가 렌더링 될때 마다 호출되므로 한번만 생성되게 함수내에서 생성
		const id = nextId();
		const newTodo = { ...inputs, id };

		// setTodos([...todos, inputs]);
		dispatch(action.add_todo(newTodo));
		setInputs({ id: "", name: "", title: "", content: "", set: false });
		navigate("/todo");
	};

	console.log(name, title, content);
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
