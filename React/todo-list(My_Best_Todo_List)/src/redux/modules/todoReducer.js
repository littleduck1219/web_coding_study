// -   (1) Action Key : 휴면에러를 방지하기 위해서
// -   (2) Action Create : usedispatch롤 호출할 Reducer의 각각의 case에 대해서 만들어서 내보내줘요.(사용처는 컴포넌트)
// -   (3) initialState : 초기값
// -   (4) Reducer : Action Create에 의해서 호출된 Reducer가 type에 따라서 동작을 수행하게될 로직을 담당해요(반환값이 여기서 만들어지니다.)

//  Action Key // 대문자
const NEW_TODO = "NEW_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Create
// new_todo> payload > 객체를 받아올꺼에요.
export const new_todo = (payload) => {
	return {
		type: NEW_TODO,
		payload,
	};
};

// delete_todo> payload > id(숫자열)
export const delete_todo = (payload) => {
	return {
		type: DELETE_TODO,
		payload,
	};
};

// update_todo> payload > id(숫자열)
export const update_todo = (payload) => {
	return {
		type: UPDATE_TODO,
		payload,
	};
};

// initialState
const initialState = [
	{
		id: 0,
		title: "나비가 날아다녀요!",
		content: "우왕",
		set: false,
	},
];

// Reducer
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_TODO:
			return [...state, action.payload];
		case DELETE_TODO:
			return [...state.filter((todo) => todo.id !== action.payload)];
		case UPDATE_TODO:
			return state.map((todo) => (todo.id === action.payload ? { ...todo, set: !todo.set } : todo));
		default:
			return state;
	}
};

export default todoReducer;
export const SetTodo = (state) => state.todoReducer;

// {
// 	id: 2,
// 	title: "리덕스 쉽네",
// 	content: "아닌듯.... 제정신임??",
// 	set: false,
// ...tode
// set
// },
