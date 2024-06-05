import React from 'react';
import './About.css';
import personImage from '../../images/profile.png';

function About({ darkMode }) {
  return (
    <div className={darkMode ? 'about dark' : 'about'}>
      <h2>About</h2>
      <div className="content">
        <div className="about-text">
          <p>
            Hello! I'm Anuj Wanjari, a Bachelor of Computer Science student at Scaler School of Technology. 
            I am passionate about data and business analytics, enjoying the challenge of working with datasets to generate insights and solve business problems.
          </p>
          <p>
            My enthusiasm lies in tackling complex business issues and challenging case studies. 
            By leveraging my analytical skills and knowledge, I aim to make data-driven decisions that drive growth and innovation.
          </p>
          <p>
            Welcome to my portfolio, where you can explore my projects and my journey in the world of analytics.
          </p>
        </div>
        <img src={personImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default About;
