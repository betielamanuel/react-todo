import PropTypes from "prop-types";

function TodoListItem({ todo }) {
  return <li>{todo.title}</li>;
}

// Prop validation for TodoListItem
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListItem;
