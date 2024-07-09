const ToDoList = () => {
  const todoList = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the cat",
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
