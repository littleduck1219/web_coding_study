import TodoItem from "./TodoItem";

const TodoList = ({ list, setList }) => {
  const onRemove = (id) => {
    const removeDatas = list.filter((item) => item.id !== id);
    setList(removeDatas);
  };

  return (
    <div className="todoContainer">
      {list?.map((item, index) => (
        <TodoItem key={index} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
