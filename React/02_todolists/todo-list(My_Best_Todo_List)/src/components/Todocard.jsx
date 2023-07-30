import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as action from "../redux/modules/todoSlice";
import menu from "../img/expand_more_FILL0_wght400_GRAD0_opsz48.png";
import { useNavigate } from "react-router-dom";

function Todocard({ item }) {
	// console.log("card render");
	const dispatch = useDispatch();
	const removeButtonHandler = (id) => {
		dispatch(action.delete_todo(id));
	};
	const navigate = useNavigate();

	const toggleButtonHandler = (id) => {
		dispatch(action.update_todo(id));
	};

	const type = item.set ? "취소" : "완료";
	return (
		<TodoCard key={item.id} className='card'>
			{/* <TodoExpand
				onClick={() => {
					navigate(`/Todoexpand/${item.id}`);
				}}>
				<img src={menu} alt='' />
			</TodoExpand> */}
			<h3>{item.title}</h3>
			<p>{item.content}</p>
			<ButtonDiv>
				<Button onClick={() => removeButtonHandler(item.id)}>삭제</Button>
				<Button onClick={() => toggleButtonHandler(item.id)}>{type}</Button>
			</ButtonDiv>
		</TodoCard>
	);
}

export default Todocard;

const TodoCard = styled.div`
	border: 2px solid #7448a8;
	border-radius: 10px;
	width: 236px;
	height: 160px;
	padding: 20px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
`;

const Button = styled.button`
	margin: auto;
	width: 100px;
	height: 35px;
	border: 2px solid #7448a8;
	border-radius: 10px;
	background-color: white;
`;

const TodoExpand = styled.button``;
