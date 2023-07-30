import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunk

// ---------------------------------------------------------------------------------------------------------------------
// todos

const __getTodos = createAsyncThunk("getTodos", async (_, thunkAPI) => {
	try {
		const res = await axios.get("http://localhost:4000/todos");
		return thunkAPI.fulfillWithValue(res.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __postTodos = createAsyncThunk("postTodos", async (payload, thunkAPI) => {
	try {
		await axios.post("http://localhost:4000/todos", payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __deleteTodos = createAsyncThunk("deleteTodos", async (payload, thunkAPI) => {
	try {
		await axios.delete(`http://localhost:4000/todos/${payload}`);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __updateTodos = createAsyncThunk("updateTodos", async (payload, thunkAPI) => {
	try {
		await axios.patch(`http://localhost:4000/todos/${payload.id}`, payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

// ---------------------------------------------------------------------------------------------------------------------
// comments

const __getComments = createAsyncThunk("getComments", async (_, thunkAPI) => {
	try {
		const res = await axios.get("http://localhost:4000/comments");
		return thunkAPI.fulfillWithValue(res.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __postComments = createAsyncThunk("postComments", async (payload, thunkAPI) => {
	try {
		const res = await axios.post("http://localhost:4000/comments", payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __deleteComments = createAsyncThunk("deleteComments", async (payload, thunkAPI) => {
	try {
		const response = await axios.delete(`http://localhost:4000/comments/${payload}`);
		// console.log("DeleteComments: ", response);
		// console.log("payload : ", payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const __updateComments = createAsyncThunk("updateComments", async (payload, thunkAPI) => {
	try {
		await axios.patch(`http://localhost:4000/comments/${payload.id}`, payload);
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const todoSlice = createSlice({
	name: "todoSlice",
	initialState: {
		todos: [],
		comments: [],
		isLoading: false,
		isError: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		//! GetTodo
		builder
			.addCase(__getTodos.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__getTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.todos = [...action.payload];
			})
			.addCase(__getTodos.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! AddTodo
		builder
			.addCase(__postTodos.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__postTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.todos = [...state.todos, action.payload];
			})
			.addCase(__postTodos.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! DeleteTodo
		builder
			.addCase(__deleteTodos.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__deleteTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)];
			})
			.addCase(__deleteTodos.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! UpdateTodo
		builder
			.addCase(__updateTodos.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__updateTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.todos = state.todos.map((todo) =>
					todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
				);
			})
			.addCase(__updateTodos.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});

		// ---------------------------------------------------------------------------------------------------------------------
		// comments

		//! GetComment
		builder
			.addCase(__getComments.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__getComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.comments = [...action.payload];
			})
			.addCase(__getComments.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! AddComment
		builder
			.addCase(__postComments.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__postComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.comments = [action.payload];
			})
			.addCase(__postComments.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! DeleteComment
		builder
			.addCase(__deleteComments.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__deleteComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.comments = [...state.comments.filter((comment) => comment.id !== action.payload)];
			})
			.addCase(__deleteComments.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		//! UpdateComment
		builder
			.addCase(__updateComments.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(__updateComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.comments = state.todos.map((comment) =>
					comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment
				);
			})
			.addCase(__updateComments.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export default todoSlice.reducer;
export {
	__getTodos,
	__postTodos,
	__deleteTodos,
	__updateTodos,
	__getComments,
	__postComments,
	__deleteComments,
	__updateComments,
};

// 이게 툴킷

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import nextId from "react-id-generator";

// // const id = nextId();

// // initialState
// const initialState = {
// 	todos: [{ id: 0, name: "박경덕", title: "나비가 날아다녀요!", content: "우왕", set: false }],
// };

// const todoSlice = createSlice({
// 	name: "todoSlice",
// 	initialState,
// 	reducers: {
// 		add_todo: (state, action) => {
// 			return { ...state, todos: [...state.todos, action.payload] };
// 		},

// 		// add_todo: (state, action) => {
// 		// 	state.todos.push(action.payload);
// 		// },

// 		delete_todo: (state, action) => {
// 			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
// 		},

// 		// delete_todo: (state, action) => {
// 		// 	state.todos = state.todos.filter((todo) => todo.id !== action.payload);
// 		// },

// 		update_todo: (state, action) => {
// 			return {
// 				...state,
// 				todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, set: !todo.set } : todo)),
// 			};
// 		},

// 		// update_todo: (state, action) => {
// 		// 	state.todos = state.todos.map((todo) => (todo.id === action.payload ? { ...todo, set: !todo.set } : todo));
// 		// },

// 		edit_todo: (state, action) => {
// 			return {
// 				...state,
// 				todos: state.todos.map((todo) =>
// 					todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
// 				),
// 			};
// 		},

// 		// edit_todo: (state, action) => {
// 		// 	state.todos = state.todos.map((todo) =>
// 		// 		todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
// 		// 	);
// 		// },
// 	},
// 	extraReducers: {}, // 비동기처리를 합니다.
// });

// export default todoSlice.reducer;
// export const SelectTodo = (state) => state.todoSlice;
// export const { add_todo, update_todo, delete_todo, edit_todo } = todoSlice.actions;
