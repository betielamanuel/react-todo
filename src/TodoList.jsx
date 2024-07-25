import TodoListItem from "./TodoListItem"; // Import TodoListItem

const todoList = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Climb Mt. Everest" },
  { id: 3, title: "Run a marathon" },
  { id: 4, title: "Feed the cat" },
];

const ToDoList = () => {
  return (
    <ul>
      {todoList.map((todo) => (
        // Use the TodoListItem component and pass key and todo as props
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
