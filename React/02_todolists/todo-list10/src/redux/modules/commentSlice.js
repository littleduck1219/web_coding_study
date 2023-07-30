import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

const id = nextId();

// initialState
const initialState = {
	comment: [{ id: 0, todoid: 0, username: "박경덕", comment: "우짜라고 ㅋ", set: false }],
};

const commentSlice = createSlice({
	name: "commentSlice",
	initialState,
	reducers: {
		add_comment: (state, action) => {
			return { ...state, comment: [...state.comment, action.payload] };
		},

		delete_comment: (state, action) => {
			return { ...state, comment: state.comment.filter((comment) => comment.id !== action.payload.id) };
		},
	},
	extraReducers: {}, // 비동기처리를 합니다.
});

export default commentSlice.reducer;
// export const SelectComment = (state) => state.commentSlice;

// Selectcomment 상태 확인 코드
export const SelectComment = (state) => {
	console.log(state);
	return state.commentSlice.comment;
};

export const { add_comment, delete_comment } = commentSlice.actions;
