import React from 'react'

function Form({title, titleChangeHandler, content, contentChangeHandler, clickAddButtonHandler}) {
  return (
    <div className='new-todo'>
				<div className='input-section'>
					제목:
					<input value={title} onChange={titleChangeHandler} />
					내용:
					<input value={content} onChange={contentChangeHandler} />
				</div>
				<button onClick={clickAddButtonHandler}>추가하기</button>
			</div>
  )
}

export default Form