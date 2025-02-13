import { useState, useEffect } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos or initialize state here
    setTodos([]);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
