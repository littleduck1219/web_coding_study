import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __getTodos = createAsyncThunk("__getTodos", async (_, thunkAPI) => {
	try {
		await waitTwoSeconds();
		const res = await axios.get("http://localhost:4001/list");
		return thunkAPI.fulfillWithValue(res.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const __addToDo = createAsyncThunk("__addToDo", async (payload, thunkAPI) => {
	try {
		await waitTwoSeconds();
		await axios.post("http://localhost:4001/list", payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const __deleteTodo = createAsyncThunk("__deleteToDo", async (payload, thunkAPI) => {
	try {
		await waitTwoSeconds();
		await axios.delete(`http://localhost:4001/list/${payload}`);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const initialState = {
	list: [],
};

const todosSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(__getTodos.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__getTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.list = action.payload; // 이 부분을 추가합니다.
			})
			.addCase(__getTodos.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});

		//! AddTodo
		builder
			.addCase(__addToDo.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__addToDo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.list = [...state.list, action.payload];
			})
			.addCase(__addToDo.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! DeleteTodo
		builder
			.addCase(__deleteTodo.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__deleteTodo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.list = [...state.list.filter((item) => item.id !== action.payload)];
			})
			.addCase(__deleteTodo.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const { getTodos, addToDo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
