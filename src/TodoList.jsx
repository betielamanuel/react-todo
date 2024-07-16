// create a functional React component
// declare a function names TodoList
// export TodoList function as default module

const todoList = [
  "Learn React",
  "Clime Mt. Everest",
  "Run a marathon",
  "Feed the cat",
];
const ToDoList = () => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
