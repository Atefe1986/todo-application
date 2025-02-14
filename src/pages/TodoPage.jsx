import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "../styles.css";

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [filter, setFilter] = useState("all");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    if (allCompleted) {
      setShowPopup(true);
    }
  }, [allCompleted]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <>
      <h1>📋Todo List </h1>

      <div className="todo-container">
        <TodoForm addTodo={addTodo} />
        <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
      </div>

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {showPopup && (
        <div className={`popup ${showPopup ? "active" : ""}`}>
          <div className="popup-content">
            <h2>🎉 Congratulations! </h2>
            <p>All works done,it is time to rest! ☕</p>
            <button onClick={() => setShowPopup(false)} className="popup-close">
              close
            </button>
          </div>
        </div>
      )}

      {todos.some((todo) => todo.completed) && (
        <button onClick={clearCompletedTodos} className="clear-button">
          🗑 Delete allCompleted.
        </button>
      )}
    </>
  );
};

export default TodoPage;
