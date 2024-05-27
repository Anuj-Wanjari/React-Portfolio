import React from 'react';
import './About.css';

function About({ darkMode }) {
  return (
    <div className={darkMode ? 'about dark' : 'about'}>
      <div className="about-text">
        <h2>About</h2>
        <p>This is where you can describe about yourself. The more you describe about yourself, the better it is!</p>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src="https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1716787811~exp=1716791411~hmac=1d0377e78a647c4b10ef266b950c2f26c730fef06482de4db0ad70bdd421ef04&w=740" alt="Profile" className="profile-image" />
    </div>
  );
}

export default About;
