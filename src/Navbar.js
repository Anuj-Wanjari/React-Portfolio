import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faGraduationCap, faBriefcase, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link></li>
        <li><Link to="/skills"><FontAwesomeIcon icon={faCode} /> Skills</Link></li>
        <li><Link to="/education"><FontAwesomeIcon icon={faGraduationCap} /> Education</Link></li>
        <li><Link to="/experience"><FontAwesomeIcon icon={faBriefcase} /> Experience</Link></li>
        <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></li>
        <li><Link to="/resume"><FontAwesomeIcon icon={faFileAlt} /> Resume</Link></li>
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
