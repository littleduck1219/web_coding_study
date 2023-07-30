// axios 요청이 들어가는 모듈
import axios from "axios";

const getTodos = async () => {
	const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos1`);
	return response.data;
};

const addTodo = async (newTodo) => {
	await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos1`, newTodo);
};

export { getTodos, addTodo };
