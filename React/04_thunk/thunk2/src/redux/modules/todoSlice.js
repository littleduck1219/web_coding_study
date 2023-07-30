//todo 1. thunk 함수구현
//todo 2. 리듀서 로직 구현 : reducers -> extraReducers
//todo    - 서버 통신 : 100% 성공x
//todo    - 지금 까지의 redux state(todos, counter)
//todo    - 앞으로의 state(isLoading, isError, data)
//todo 3. 기능 확인(network) + devTools
//todo 4. store의 값을 조회 + 화면 렌더링

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

const initalState = {
	todos: [],
	isLoading: false,
	isError: false,
	error: null,
};

export const __getTodos = createAsyncThunk("getTodos", async (payload, thunkAPI) => {
	try {
		const respones = await axios.get("http://localhost:4001/todos");
		console.log("response", respones.data);
		thunkAPI.fulfillWithValue(respones.data);
	} catch (error) {
		console.log("error", error);
		thunkAPI.rejectWithValue(error);
	}
});

export const todosSlice = createSlice({
	namd: "todos",
	initalState,
	reducers: {},
	extraReducers: {
		[__getTodos.pending]: (state, action) => {
			state.isLoading = true;
			state.isError = false;
		},
		[__getTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.todos = action.payload;
		},
		[__getTodos.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = error;
			state.error = action.payload;
		},
	},
});

export const { __getTodos } = todosSlice.actions;
export default todosSlice.reducer;
