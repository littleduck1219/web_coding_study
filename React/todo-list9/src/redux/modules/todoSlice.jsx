import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

const id = nextId();

// 2개의 input
// 이름
// 함수
export const __addNumber = createAsyncThunk("ADD_NUMBER");

// initialState
const initialState = [
	{
		id: id,
		name: "박경덕",
		title: "나비가 날아다녀요!",
		content: "우왕",
		set: false,
	},
];

const todoSlice = createSlice({
	name: "todoSlice",
	initialState,
	reducers: {
		add_todo: (state, action) => {
			return [...state, action.payload];
		},
		delete_todo: (state, action) => {
			return [...state.filter((todo) => todo.id !== action.payload)];
		},
		update_todo: (state, action) => {
			return state.map((todo) => (todo.id === action.payload ? { ...todo, set: !todo.set } : todo));
		},
		edit_todo: (state, action) => {
			return state.map((todo) =>
				todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
			);
		},
	},
	extraReducers: {}, // 비동기처리를 합니다.
});

export default todoSlice.reducer;
export const SelectTodo = (state) => state.todoSlice;
export const { add_todo, update_todo, delete_todo, edit_todo } = todoSlice.actions;
