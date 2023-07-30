import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __updateTodos } from "../redux/modules/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Comment from "../components/Comment";

function TodoDetail() {
	const thunk = useSelector((state) => state.todoSlice);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		dispatch(__getTodos());
	}, [dispatch]);

	const todo = thunk.todos.find((todo) => todo.id == Number(id));
	const [editMode, setEditMode] = useState(false);
	const [editedContent, setEditedContent] = useState("");

	const handleContentChange = (event) => {
		setEditedContent(event.target.value);
	};

	const handleSaveButton = () => {
		const updateTodo = {
			id: todo.id,
			content: editedContent,
		};
		console.log(updateTodo);
		dispatch(__updateTodos(updateTodo));
		setEditMode(false);
	};
	if (!todo) {
		return <div>Loading...</div>;
	}

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
	min-height: 300px;
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
