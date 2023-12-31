import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { __deleteTodos, __getTodos } from "../redux/modules/todoSlice";

function TodoCard() {
	const thunk = useSelector((state) => state.todoSlice);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(__getTodos());
	}, [dispatch]);

	const toggleButtonHandler = (event, id) => {
		event.stopPropagation();
		dispatch(__deleteTodos(id));
	};
	return (
		<div>
			{thunk.todos.map((todo) => {
				return (
					<TodoCardStyle
						key={todo.id}
						onClick={() => {
							navigate(`/todo/detail/${todo.id}`);
						}}>
						<TodoTitleContainer>
							<p>{todo.title}</p>
							<TodoDeleteButton
								onClick={(event) => {
									toggleButtonHandler(event, todo.id);
								}}>
								<FaTrashAlt size='15' color='red' />
							</TodoDeleteButton>
						</TodoTitleContainer>
						<TodoName>{`작성자: ${todo.name}`}</TodoName>
					</TodoCardStyle>
				);
			})}
		</div>
	);
}

export default TodoCard;

const TodoCardStyle = styled.div`
	margin-bottom: 20px;
	padding: 12px;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 90px;
`;

const TodoTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
	font-size: 20px;
`;

const TodoDeleteButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid lightgray;
	border-radius: 5px;
	height: 30px;
	width: 30px;
`;

const TodoName = styled.div`
	margin: 10px;
	font-size: 10px;
	font-weight: 500;
`;
