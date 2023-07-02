// import { legacy_createStore } from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../modules/todoReducer";
import todoSlice from "../modules/todoSlice";

// const rootReudecer = combineReducers({
// 	// modules...
// 	todoReducer, todoSlice
// });

// const store = legacy_createStore(rootReudecer);

//

const store = configureStore({
	reducer: {
		todoReducer,
		todoSlice,
	},
});

export default store;
