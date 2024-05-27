import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li>
          <div className="toggle" onClick={toggleDarkMode}>
            <div className={darkMode ? 'toggle-circle dark' : 'toggle-circle'}></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
