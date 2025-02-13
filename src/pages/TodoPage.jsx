import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "../styles.css";

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log("todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>📋Todo List </h1>

      <div className="todo-container">
        <TodoForm addTodo={addTodo} />

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default TodoPage;
