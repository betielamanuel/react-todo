import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem"; // Import TodoListItem

// Destructure props to directly get todoList
const ToDoList = ({ todoList }) => {
  return (
    <ul>
      {/* Map through the todoList and render each todo item */}
      {todoList.map((todo) => (
        // Use the TodoListItem component and pass key and todo as props
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

// Prop validation for ToDoList
ToDoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ToDoList;
