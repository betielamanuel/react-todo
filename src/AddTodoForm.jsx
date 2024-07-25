function AddTodoForm() {
  // create a new function called handleAddTodo
  const handleAddTodo = () => {
    // prevent the default behavior of the form submit
    event.preventDefault();

    // retrieve the value of the title element from
    // the event target
    const todoTitle = event.target.elements.title.value;

    // log the value of todoTitle in the console
    console.log(todoTitle);

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

export default AddTodoForm;
