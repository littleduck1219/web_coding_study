import { useState } from "react";

const TodoInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const onClick = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input value={value} onChange={onChange} />
        <button onClick={onClick}>등록</button>
      </div>
      <h1>Todo List</h1>
    </div>
  );
};
export default TodoInput;
