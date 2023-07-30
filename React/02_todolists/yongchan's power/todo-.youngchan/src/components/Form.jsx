import React from "react";

// function Form({ title, titleChangeHandler, content, contentChangeHandler, clickAddButtonHandler }) {
function Form({ inputvalue, onChangeInput, clickAddButtonHandler }) {
	console.log("activate: Form");
	return (
		<div className='new-todo'>
			<div className='input-section'>
				제목:
				<input value={inputvalue.title} name='title' onChange={onChangeInput} />
				내용:
				<input value={inputvalue.content} name='content' onChange={onChangeInput} />
			</div>
			<button onClick={clickAddButtonHandler}>추가하기</button>
		</div>
	);
}

export default Form;
