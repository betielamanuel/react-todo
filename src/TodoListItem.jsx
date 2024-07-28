import PropTypes from "prop-types";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
}

// Prop validation for TodoListItem
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
