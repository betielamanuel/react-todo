// create a functional React component
// declare a function names TodoList
// export TodoList function as default module

const todoList = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Clime Mt. Everest" },
  { id: 3, title: "Run a marathon" },
  { id: 4, title: "Feed the cat" },
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
