import React from 'react';
import '../css/App.css';
import { Link, useNavigate } from 'react-router-dom';
import {useUser} from './UserContext';

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const userContext = useUser();


  console.log('UserContext:', userContext);

  const handleLogout = () => {
    console.log('Logout attempted');
    if (userContext && typeof userContext.logout === 'function') {
      try {
        userContext.logout();
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
        alert('An error occurred while logging out. Please try again.');
      }
    } else {
      console.error('logout is not a function', userContext);
      alert('Unable to logout at the moment. Please try again later.');
    }
  };

  console.log('Current user:', user);
  
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
          <span className="icon">🛒</span>
        </div>
      </div>
      <div className='logout'>
        <p>Welcome, {user ? user.fullName || 'Guest' : 'Guest'}</p>
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