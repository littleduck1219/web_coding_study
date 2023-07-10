import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectTodo } from "../redux/modules/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import * as action from "../redux/modules/todoSlice";
import { styled } from "styled-components";
import Comment from "../components/Comment";

function TodoDetail() {
	const todoList = useSelector(SelectTodo);
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const todo = todoList.find((todo) => todo.id === id);

	const [editMode, setEditMode] = useState(false);
	const [editedContent, setEditedContent] = useState(todo.content);

	console.log("🚀 ~ file: TodoDetail.jsx:15 ~ TodoDetail ~ editMode:", editMode);

	const handleContentChange = (event) => {
		setEditedContent(event.target.value);
	};

	const handleSaveButton = () => {
		dispatch(action.edit_todo({ id: todo.id, content: editedContent }));
		setEditMode(false);
	};

	return (
		<DetailContainer>
			{!editMode && (
				<DetailContent>
					<TodoDetailUpper key={todo.id}>
						<TodoId>{todo.id}</TodoId>
						<GoTodoListButton onClick={() => navigate(-1)}>{"이전으로"}</GoTodoListButton>
					</TodoDetailUpper>
					<TodoContainer>
						<TodoTitle>{todo.title}</TodoTitle>
						<TodoContent>{todo.content}</TodoContent>
						<EditTodoButton
							onClick={() => {
								setEditMode(true);
							}}>
							{"수정"}
						</EditTodoButton>
					</TodoContainer>

					<Comment />
				</DetailContent>
			)}
			{editMode && (
				<EditModeContainer>
					<TodoTitle>{todo.title}</TodoTitle>
					<EditContent>
						<EditInput
							type='text'
							maxLength={200}
							rows='10'
							value={editedContent}
							onChange={handleContentChange}
						/>
					</EditContent>

					<EditButton onClick={handleSaveButton}>{"저장"}</EditButton>
				</EditModeContainer>
			)}
		</DetailContainer>
	);
}

export default TodoDetail;

const DetailContainer = styled.div`
	display: flex;
	/* align-items: start; */
	justify-content: space-between;
	flex-direction: column;
	gap: 10px;
	margin-top: 30px;
	padding: 30px;
	/* width: 100%; */
	height: 100%;
`;

const DetailContent = styled.div``;

const TodoDetailUpper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TodoId = styled.div`
	font-size: 30px;
`;

const GoTodoListButton = styled.button`
	background-color: #fff;
	border: none;
	font-size: 30px;
`;

const TodoContainer = styled.div`
	margin-top: 30px;
`;

const TodoTitle = styled.div`
	font-size: 50px;
`;

const TodoContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 50px;
	min-height: 400px;
	font-size: 20px;
`;

const EditTodoButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 50px;
	font-size: 15px;
`;

const EditModeContainer = styled.div``;

const EditContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	min-height: 550px;
`;

const EditInput = styled.textarea`
	margin-top: 50px;
	padding: 15px;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 300px;
`;

const EditButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	border: 1px solid lightgray;
	border-radius: 10px;
	width: 100%;
	height: 40px;
	font-size: 15px;
`;
