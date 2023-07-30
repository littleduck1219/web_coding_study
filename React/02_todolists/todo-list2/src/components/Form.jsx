import React from "react";

function submit({title, titleChangeHandler, content, contentChangeHandler, clickAddButtonHandler}) {
	return (
		<div className='new-todo'>
			<div>
				제목 :
				<input value={title} onChange={titleChangeHandler} />
				내용 :
				<input value={content} onChange={contentChangeHandler} />
			</div>
			<button onClick={clickAddButtonHandler}>제출하기</button>
		</div>
	);
}

export default submit;
