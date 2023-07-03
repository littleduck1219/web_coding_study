import React from "react";
import uuid from "react-uuid";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import { SetTodo, new_todo } from "../redux/modules/todoReducer";
import { SetTodo, new_todo } from "../redux/modules/todoSlice";

function Todoinput() {
	const todoLists = useSelector(SetTodo);
	const dispatch = useDispatch();

	// console.log("input render");
	console.log(todoLists);
	const id = uuid();
	const [inputs, setInputs] = useState({
		id: id,
		title: "",
		content: "",
		set: false,
	});

	const { title, content } = inputs;

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const todoAddButtonHandler = (event) => {
		event.preventDefault();
		if (title === "" || content === "") {
			alert("제목과 내용을 모두 입력해주세요.");
		} else {
			// setTodos([...todos, inputs]);
			dispatch(new_todo(inputs));
			setInputs({ id: id, title: "", content: "", set: false });
		}
	};

	// const todoAddButtonHandler2 = (event) => {
	// 	event.preventDefault();
	// 	dispatch(new_todo(inputs));
	// 	setInputs({ id: id, title: "", content: "", set: false });
	// };

	return (
		<AddInputContainer>
			<InputContainer>
				제목 : <SubmitInput name='title' onChange={onChange} value={title} />
				내용 : <SubmitInput name='content' onChange={onChange} value={content} />
			</InputContainer>
			<SubmitButton onClick={todoAddButtonHandler}>{"추가하기"}</SubmitButton>
		</AddInputContainer>
	);
}

export default Todoinput;

const AddInputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #7448a8;
	border-radius: 10px;
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px;
	color: white;
	font-weight: 500;
	font-size: 20px;
`;

const SubmitInput = styled.input`
	width: 200px;
	height: 30px;
	margin: 0 20px 0 10px;
	padding-left: 10px;
	background-color: white;
	border: none;
	border-radius: 5px;
	font-size: 20px;
`;

const SubmitButton = styled.button`
	margin-right: 20px;
	font-size: 20px;
	width: 150px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background-color: #b576b3;
	color: white;
`;
