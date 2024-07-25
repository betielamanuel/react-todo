import { useState } from "react"; // import useState hook

import ToDoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  // create a new state variable named newTodo with update
  // function named setNewTodo
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      {/*  pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component  */}

      <AddTodoForm onAddTodo={setNewTodo} />
      {/* Add a paragraph element that displays the value of newTodo variable */}
      <p>New Todo: {newTodo}</p>
      <ToDoList />
    </div>
  );
}

export default App;
