import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="menu">
          <Link to="/" className="nav-link">
            Todo
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <footer>
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
