import React from "react";

function TodoLists({ title, todoClassName, type, deleteUserHandler, toggleTodoButton, todo }) {
	console.log("activate: TodoLists");
	return (
		<div className={todoClassName}>
			<h2>{title}</h2>
			<div className='card-container'>
				{todo.map((list) => {
					return (
						<div key={list.id} className='todo-card'>
							<div className='todo-content'>
								<h3>{list.title}</h3>
								<p>{list.content}</p>
								<div className='todo-button'>
									<button onClick={() => deleteUserHandler(list.id)}>삭제하기</button>
									<button onClick={() => toggleTodoButton(list.id)}>{type ? "취소" : "완료"}</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TodoLists;
