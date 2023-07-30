import React, { useRef } from "react";

type NewTodoProps = {
	onAddTodo: (todoText: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		props.onAddTodo(enteredText);
		console.log(enteredText);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div>
				<label>Todo TEXT</label>
				<input type='text' id='todo-text' ref={textInputRef} />
			</div>
			<button>ADD TODO</button>
		</form>
	);
};
