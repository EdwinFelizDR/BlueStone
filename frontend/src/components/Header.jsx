import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import '../css/App.css';

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const userContext = useUser();

  const handleLogout = () => {
    if (userContext && typeof userContext.logout === 'function') {
      try {
        userContext.logout();
        localStorage.removeItem('sessionToken'); // Clear session token
        navigate('/login'); // Navigate to login page
      } catch (error) {
        alert('An error occurred while logging out. Please try again.');
      }
    } else {
      alert('Unable to logout at the moment. Please try again later.');
    }
  };

  return (
    <header>
      <div className='header'>
        <div className="logo" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/imgs/Logo2.png" alt="Logo" />
        </div>
        <div className='navBar'>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shopall">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="icons">
          <span className="icon">❤️</span>
          <span className="icon"><Link to="/login" style={{ textDecoration: 'none' }}>👤</Link></span>
          <span className="icon"><Link to="/cart" style={{ textDecoration: 'none' }}>🛒</Link></span>
        </div>
      </div>
      <div className='logout'>
        <p>Welcome, {user ? user.firstName+" "+user.lastName || 'Guest' : 'Guest'}</p>
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." style={{ height: '25px' }} />
        <button className="icon">🔍</button>
      </div>
    </header>
  );
};

export default Header;