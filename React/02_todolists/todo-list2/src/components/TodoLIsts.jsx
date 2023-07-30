import React from "react";

function TodoLIsts({ title, condition, type, deleteTodoHandler, toggleTodoHandler }) {
	return (
		<div className='todo-working'>
			<h2>{title}</h2>
			<div className='card-container'>
				{condition.map((list) => {
					return (
						<div key={list.id} className='todo-card'>
							<div className='todo-content'>
								<h3>{list.title}</h3>
								<p>{list.content}</p>
								<button onClick={() => deleteTodoHandler(list.id)}>삭제하기</button>
								<button onClick={() => toggleTodoHandler(list.id)}>{type ? "취소" : "완료"}</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TodoLIsts;
