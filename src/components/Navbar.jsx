import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <img 
      src="\Netflix-new-icon.png" 
      alt="Netflix Logo" 
      className="navbar-logo" 
    />
    <button className="navbar-button">Sign In</button>
  </div>
);

export default Navbar;
