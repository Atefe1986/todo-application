import PropTypes from "prop-types";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>

      <div>
        <button className="toggle-btn" onClick={() => toggleTodo(todo.id)}>
          ✔️
        </button>

        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
