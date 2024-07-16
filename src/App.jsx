import ToDoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <ToDoList />
    </div>
  );
}

export default App;
