//! Ducks pattern
// export const COUNT_ADD = "COUNT_ADD";
// export const COUNT_REMOVE = "COUNT_REMOVE";
// export const COUNT_INPUT = "COUNT_INPUT";

// export const plusOne = () => {
// 	return {
// 		type: COUNT_ADD,
// 	};
// };

// export const minusOne = () => {
// 	return {
// 		type: COUNT_REMOVE,
// 	};
// };

// export const inputCount = (count) => {
// 	return {
// 		type: COUNT_INPUT,
// 		payload: count,
// 	};
// };

// const initialState = {
// 	number: 0,
// };

// const counterSlice = (state = initialState, action) => {
// 	switch (action.type) {
// 		case COUNT_ADD:
// 			return { number: state.number + 1 };
// 		case COUNT_REMOVE:
// 			return { number: state.number - 1 };
// 		case COUNT_INPUT:
// 			return { number: state.number + action.payload };
// 		default:
// 			return state;
// 	}
// };

//! reducer toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	number: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addNumber: (state, action) => {
			state.number = state.number + action.payload;
		},
		minusNumber: (state, action) => {
			state.number = state.number - action.payload;
		},
	},
});

export default counterSlice.reducer;
export const Counter = (state) => state.counter;
// export const SetTodoSlice = (state) => state.counterSlice;
export const { addNumber, minusNumber, inputCount } = counterSlice.actions;
