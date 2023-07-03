// -   (1) initialState : 초기값
// -   (2) Slice :

import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = [
	{
		id: 0,
		title: "나비가 날아다녀요!",
		content: "우왕",
		set: false,
	},
];

const todoSlice = createSlice({
	name: "todoSlice",
	initialState,
	reducers: {
		new_todo: (state, action) => {
			return [...state, action.payload];
		},
		delete_todo: (state, action) => {
			return [...state.filter((todo) => todo.id !== action.payload)];
		},
		update_todo: (state, action) => {
			return state.map((todo) => (todo.id === action.payload ? { ...todo, set: !todo.set } : todo));
		},
	},
	extraReducers: {}, // 비동기처리를 합니다.
});

export default todoSlice.reducer;
export const SetTodo = (state) => state.todoSlice;
export const { new_todo, update_todo, delete_todo } = todoSlice.actions; // (3)
