import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const { logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Masai Student Dashboard</h1>
        
        <nav className="nav">
          <button
            className={`nav-button ${currentPage === 'register' ? 'active' : ''}`}
            onClick={() => setCurrentPage('register')}
          >
            Register Student
          </button>
          <button
            className={`nav-button ${currentPage === 'list' ? 'active' : ''}`}
            onClick={() => setCurrentPage('list')}
          >
            Student List
          </button>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;