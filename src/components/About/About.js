import React from 'react';
import './About.css';
import personImage from '../../images/profile.png'; // Import the image

function About({ darkMode }) {
  return (
    <div className={darkMode ? 'about dark' : 'about'}>
      <h2>About</h2>
      <div className="content">
        <div className="about-text">
          <p>This is where you can describe about yourself. The more you describe about yourself, the better it is!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Use the imported image */}
        <img src={personImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default About;
