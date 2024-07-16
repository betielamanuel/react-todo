// import React from "react";

// above the App() function, create an empty Array and store it in a variable
// names todoList

let todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read a book" },
  { id: 3, title: "Go for a walk" },
];

const App = () => {
  return (
    <div>
      {/* create a level-one heading thats says "Todo List" */}
      <h1>Todo List</h1>
      {/* create an unordered list (<ul>) */}
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
