// import React from 'react';
import PropTypes from "prop-types";

// Declare a function named TodoListItem
function TodoListItem({ todo }) {
  // Multi-line return statement with JSX content
  return <li>{todo.title}</li>;
}

// Prop validation for TodoListItem
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// Export TodoListItem function as default module
export default TodoListItem;
