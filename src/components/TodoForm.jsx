import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
