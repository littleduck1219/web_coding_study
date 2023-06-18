const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerHTML = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	span.innerHTML = newTodo;
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	console.log(newTodo, toDoInput.value);
	toDos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	console.log(parsedToDos);
	toDos - parsedToDos;
	parsedToDos.forEach(paintToDo);
}
