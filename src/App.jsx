import { useState, useEffect, Fragment } from "react";
import ToDoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// Custom Hook
function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("savedTodoList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  // Use the custom hook
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <ToDoList todoList={todoList} />
    </Fragment>
  );
}

export default App;
