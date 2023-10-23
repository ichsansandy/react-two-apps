import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import GreetingsPage from './components/GreetingsPage';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/greetings"
        >
          Greetings
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/greetings"
          element={<GreetingsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
