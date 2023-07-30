const TodoItem = ({ item, onRemove }) => {
  const removeHandler = () => {
    onRemove(item.id);
  };
  return (
    <div className="Container">
      <div>{item.text}</div>
      <button onClick={removeHandler}>삭제</button>
    </div>
  );
};
export default TodoItem;
