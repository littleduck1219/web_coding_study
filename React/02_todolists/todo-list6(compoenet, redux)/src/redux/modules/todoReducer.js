// Action Key
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Create
export const add_todo = (payload) => {
	return {
		type: ADD_TODO,
		payload,
	};
};

export const delete_todo = (payload) => {
	return {
		type: DELETE_TODO,
		payload,
	};
};

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
		case ADD_TODO:
			return [...state, action.payload];
		case DELETE_TODO:
			return [...state.filter((item) => item.id !== action.payload)];
		case UPDATE_TODO:
			return state.map((item) => (item.id === action.payload ? { ...item, set: !item.set } : item));
		default:
			return state;
	}
};

export default todoReducer;
export const SetTodo = (state) => state.todoReducer;
