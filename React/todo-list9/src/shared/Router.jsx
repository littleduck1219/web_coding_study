import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";
import TodoDetail from "../pages/TodoDetail";
import AddTodo from "../pages/AddTodo";
import Todo from "../pages/Todo";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='todo' element={<Todo />} />
				<Route path='todo/add' element={<AddTodo />} />
				<Route path='todo/detail/:id' element={<TodoDetail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
