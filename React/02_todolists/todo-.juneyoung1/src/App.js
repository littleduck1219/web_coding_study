import { useRef, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  const id = useRef(0);

  const onSubmit = (value) => {
    setList([...list, { id: id.current, text: value }]);
    id.current = id.current + 1;
  };

  return (
    <div className="App">
      <TodoInput onSubmit={onSubmit} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
