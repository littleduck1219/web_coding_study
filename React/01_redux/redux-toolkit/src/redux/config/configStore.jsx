// import { legacy_createStore } from "redux";
// import { combineReducers } from "redux";
// import counter from "../modules/count";
import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/countSlice";

// const rootReducer = combineReducers({
// 	counter,
// });
// const store = legacy_createStore(rootReducer);

const store = configureStore({
	reducer: {
		counter,
	},
});

export default store;
