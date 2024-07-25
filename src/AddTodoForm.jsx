import PropTypes from "prop-types";

function AddTodoForm(props) {
  // create a new function called handleAddTodo
  const handleAddTodo = (event) => {
    // prevent the default behavior of the form submit
    event.preventDefault();

    // retrieve the value of the title element from
    // the event target
    const todoTitle = event.target.elements.title.value;

    // log the value of todoTitle in the console
    console.log(todoTitle);

    // invoke the onAddTodo callback prop and pass todoTitle as an argument
    props.onAddTodo(todoTitle);

    // reset the form so the text input value is cleared
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

// Prop validation for AddTodoForm
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
