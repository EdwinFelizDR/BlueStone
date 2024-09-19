import React from 'react';
import '../css/footer.css'; // Update the path to the CSS file if necessary
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a className="social-button facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="social-button twitter" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="social-button instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;