// import { legacy_createStore } from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";
import commentSlice from "../modules/commentSlice";

// const rootReudecer = combineReducers({
// 	// modules...
// 	todoReducer, todoSlice
// });

// const store = legacy_createStore(rootReudecer);

//

const store = configureStore({
	reducer: {
		todoSlice,
		commentSlice,
	},
});

export default store;
