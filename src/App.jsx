import { useState, useEffect, Fragment } from "react";
import TodoList from "./TodoList";
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

  // Define the removeTodo handler function
  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </Fragment>
  );
}

export default App;
