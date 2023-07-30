import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";
import TodoDetail from "../pages/TodoDetail";
import AddTodo from "../pages/AddTodo";
import Todo from "../pages/Todo";
// import Mousemover from "../components/Mousemover";

const Router = () => {
	return (
		<BrowserRouter>
			{/* <Mousemover /> */}
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
