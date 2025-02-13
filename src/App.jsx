import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Todo</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
