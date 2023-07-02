// 초기값
// const [number , setNumber] = useState(0)
const initialState = {
	userId: 123,
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state, action
const users = (state = initialState, action) => {
	// action에는 type, value가 있다.
	switch (action.type) {
		default:
			return state;
	}
};

export default users;
