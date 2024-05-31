import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home({ darkMode }) {
  return (
    <div className={darkMode ? "home dark" : "home"}>
      <div className="intro">
        <h1>Anuj Wanjari</h1>
        <p>I'm a <Typewriter
          words={['Developer', 'Analyst']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anuj-wanjari-94a941257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Anuj-Wanjari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:anujwanjari5@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
